/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const options = {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    };

    await queryInterface.addColumn('Notes', 'userId', options);
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('Notes', 'userId');
  },
};
