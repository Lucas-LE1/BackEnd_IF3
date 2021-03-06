const { DataTypes } = require('sequelize');
const { sequelize } = require('../conection.js');

const User = sequelize.define('users',{
    id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    email:{
        type:DataTypes.STRING(75),
        allowNull:false,
        unique:true
    },
    registration: {
        type:DataTypes.STRING(50),
        allowNull:false,
        unique:true
    },
    name: {
        type:DataTypes.STRING(60),
        allowNull:false,
    },
    password: {
        type:DataTypes.STRING(70),
        allowNull:false,
    },
    authenticate: {
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
})

// User.sync({force:true})

exports.User = User;