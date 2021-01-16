import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';
// classe sera usada no ORM
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        // termminar depois que tivermos quem será o usuário
      },
      {
        sequelize,
      }
    );

    // antes de ssalvar, criptografa a senha do usuário
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }

  // associação entre a foto e o usuário
  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'foto' });
  }

  // verifica se a password digitada bate com o hash
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
