const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const rawPassword = process.env.DEMO_PASSWORD || 'test_password';
    const saltRounds = Number(process.env.SALT_ROUNDS) || 10;
    const hashedPassword = await bcrypt.hash(rawPassword, saltRounds);

    const user = {
      login: process.env.DEMO_USER || 'test',
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await queryInterface.bulkInsert('Users', [user]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
