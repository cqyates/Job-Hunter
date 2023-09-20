const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js')

class Project extends Model {}

Project.init(
  {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    deployedLink: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    githubLink: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageSrc: {
        type: DataTypes.STRING,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: "User",
            key: "id"
        }
    },
    jobId: {
        type: DataTypes.INTEGER,
        references: {
            model: "Jobs",
            key: "id"
        }
    }
  },
  {
    sequelize
  }
);

module.exports = Project;