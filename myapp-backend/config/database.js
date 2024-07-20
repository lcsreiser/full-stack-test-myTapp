const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mydatabase', 'myuser', 'ubuntu24', {
    host: 'localhost',
    dialect: 'postgres',
})

module.exports = sequelize
