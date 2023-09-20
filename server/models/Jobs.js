const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Job extends Model {}

Job.init(
  {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    webLink: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: "User",
            key: "id"
        }
    },
    projectId: {
        type: DataTypes.INTEGER,
        references: {
            model: "Projects",
            key: "id"
        }
    }
  },
  {
    sequelize
  }
);

module.exports = Job