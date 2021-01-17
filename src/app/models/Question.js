import Sequelize, { Model } from 'sequelize';

class Question extends Model {
  static init(sequelize) {
    super.init(
      {
        tittle: Sequelize.TEXT('long'),
        solution: Sequelize.INTEGER,
        options: Sequelize.TEXT('long'),
      },
      {
        sequelize,
      }
    );
    return this;
  }

  checkOption(option) {
    if (option === this.solution) {
      return this;
    }
    return null;
  }
}
export default Question;
