/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const rawNotes = [
      { title: 'Git для начинающих', body: 'Раз ветка, два ветка...' },
      {
        title: 'Git для продолжающих',
        body: 'Время создавать ветки, время их сливать',
      },
      {
        title: 'State of JS 2022',
        body: 'Опросник открыт. Можно смотреть, что завезли нового в экосистему JS.',
      },
    ];

    const notes = rawNotes.map((note) => ({
      ...note,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Notes', notes);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Notes');
  },
};
