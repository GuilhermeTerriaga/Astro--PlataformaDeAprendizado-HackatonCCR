module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('questions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tittle: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
      },
      solution: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      options: {
        type: Sequelize.TEXT('long'),
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('questions');
  },
};
