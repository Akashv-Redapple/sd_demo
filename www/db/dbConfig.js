require('dotenv').config()
const Sequelize = require('sequelize')
let config = require('../../config/config.json')

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: process.env.DIALECT,
    define: {
        timestamps: false,
        freezeTableName: true
    }
})

module.exports = {
    sequelize: sequelize
}

