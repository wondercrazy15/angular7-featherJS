// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const contact = sequelizeClient.define('contacts', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey:true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateOfBirth:{
      type: DataTypes.DATE,
      allowNull: true,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    amount:{
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updatedAt'
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  contact.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return contact;
};
