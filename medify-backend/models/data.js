const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

const Appointments = sequelize.define('Appointments', {
    appointment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'patients', // Assuming you have a 'patients' table
            key: 'patient_id'
        }
    },
    professional_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'healthcare_professionals',
            key: 'professional_id'
        }
    },
    appointment_date: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    appointment_time: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'appointments',
    timestamps: false
});

const MedicalTests = sequelize.define('MedicalTests', {
    test_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'patients', // Assuming you have a 'patients' table
            key: 'patient_id'
        }
    },
    professional_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'healthcare_professionals',
            key: 'professional_id'
        }
    },
    test_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    test_date: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    results: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'medical_tests',
    timestamps: false
});

const Prescriptions = sequelize.define('Prescriptions', {
    prescription_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'patients', // Assuming you have a 'patients' table
            key: 'patient_id'
        }
    },
    professional_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'healthcare_professionals',
            key: 'professional_id'
        }
    },
    medication_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    dosage: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    start_date: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    end_date: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    instructions: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'prescriptions',
    timestamps: false
});

module.exports = {
    Appointments,
    MedicalTests,
    Prescriptions
};