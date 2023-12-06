const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
// create our User model
class UserProfile extends Model {}

UserProfile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    github_username: {
      type: DataTypes.STRING,
    },
    profile_image: {
      type: DataTypes.STRING,
    },
    profile_url: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        isUrl: true
      }
    },
    home_phone: {
      type: DataTypes.STRING,
    },
    cell_phone: {
      type: DataTypes.STRING,
    },
    github_url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    linkedin_url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    facebook_url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    indeed_url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    monster_url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    dice_url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    zipRecruiter_url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'UserProfile',
  }
);

module.exports = UserProfile;
