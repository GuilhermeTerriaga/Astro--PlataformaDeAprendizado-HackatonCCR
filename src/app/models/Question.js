import Sequelize, { Model } from 'sequelize';

class Question extends Model {
  static init(sequelize) {
    super.init(
      {
        tittle: Sequelize.TEXT('long'),
        solution: Sequelize.INTEGER,
        options: Sequelize.JSON,
      },
      {
        sequelize,
      }
    );
  }
}

export default Question;
