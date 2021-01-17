module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },

  down: async (queryInterface) => {
    return queryInterface.removeColumn('users', 'created_at');
  },
};
