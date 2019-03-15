import Sequelize from 'sequelize'

// initiate database variable
let db

db = new Sequelize('bomed', 'postgres', process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'postgres'
})

// item schema
const Item = db.define('items', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    catalog: {
        type: Sequelize.STRING,
        allowNull: true
    },
    serial: {
        type: Sequelize.STRING,
        allowNull: true
    },
    location: {
        type: Sequelize.STRING,
        allowNull: true
    },
    dateDeliver: {
        type: Sequelize.STRING,
        allowNull: true
    },
    datePickup: {
        type: Sequelize.STRING,
        allowNull: true
    },
    note: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

export default Item
