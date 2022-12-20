const { Model } = require('sequelize');
const setupDateGetter = require('../helpers/setupDateGetter');

module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    static associate({ User }) {
      Note.Author = Note.belongsTo(User, {
        foreignKey: 'userId',
        as: 'author',
      });
    }

    static list() {
      // SELECT id, title, createdAt FROM "Notes";
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
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      get: setupDateGetter('createdAt'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      get: setupDateGetter('updatedAt'),
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
