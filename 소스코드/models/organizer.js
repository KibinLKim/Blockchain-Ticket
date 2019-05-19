'use strict';
module.exports = (sequelize, DataTypes) => {
  const organizer = sequelize.define('organizer', {
    organizer_index: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(11)
    },
    organizer_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING(45)
    },
    organizer_pw: {
      allowNull: false,
      type: DataTypes.STRING
    },
    organizer_email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      validate: {
        isEmail: true
      },
      primaryKey: true
    },
    organizer_contact: {
      allowNull: false,
      type: DataTypes.INTEGER(11)
    },
    organizer_account: {
      allowNull: false,
      type: DataTypes.BIGINT(20)
    },
    organizer_name: {
      allowNull: false,
      type: DataTypes.STRING(45)
    },
    salt: {
      type: DataTypes.STRING
    }
  }, {});
  organizer.associate = function(models) {
    // associations can be defined here
  };
  return organizer;
};