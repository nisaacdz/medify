const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

const patient = sequelize.define('patient', {
    patient_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    last_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    other_names: {
        type: DataTypes.TEXT
    },
    date_of_birth: {
        type: DataTypes.INTEGER
    },
    address: {
        type: DataTypes.TEXT
    },
    email: {
        type: DataTypes.TEXT
    },
    sex_chromosome: {
        type: DataTypes.STRING(2)
    },
    blood_type: {
        type: DataTypes.TEXT
    },
    phone: {
        type: DataTypes.TEXT
    },
    medical_history: {
        type: DataTypes.TEXT
    },
    emergency_contact_name: {
        type: DataTypes.TEXT
    },
    emergency_contact_phone: {
        type: DataTypes.TEXT
    },
    insurance_provider: {
        type: DataTypes.TEXT
    },
    insurance_policy_number: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'patient',
    timestamps: false
});

// Sync the model with the database
sequelize.sync();

export default patient;