const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

const Sessions = sequelize.define('sessions', {
    session_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    patient_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'patients', // name of the target table
            key: 'patient_id' // key in the target table
        }
    },
    test_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'medical_tests',
            key: 'test_id'
        }
    },
    prescription_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'prescriptions',
            key: 'prescription_id'
        }
    },
    arrival_timestamp: {
        type: DataTypes.INTEGER
    },
    departure_timestamp: {
        type: DataTypes.INTEGER
    },
    session_type: {
        type: DataTypes.TEXT
    },
    complaint: {
        type: DataTypes.TEXT
    },
    notes: {
        type: DataTypes.TEXT
    },
    temperature: {
        type: DataTypes.INTEGER
    },
    systol_blood_pressure: {
        type: DataTypes.INTEGER
    },
    diastol_blood_pressure: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'sessions',
    timestamps: false
});

module.exports = Sessions;