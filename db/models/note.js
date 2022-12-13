const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    static associate() {}

    static list() {
      return this.findAll({
        attributes: ['id', 'title', 'createdAt'],
      });
    }
  }

  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  };

  const options = {
    sequelize,
    modelName: 'Note',
    tableName: 'Notes',
  };

  Note.init(attributes, options);

  return Note;
};
