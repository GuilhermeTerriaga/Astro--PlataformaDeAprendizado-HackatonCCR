module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },

  down: async (queryInterface) => {
    return queryInterface.removeColumn('users', 'updated_at');
  },
};
