const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

const HealthcareProfessionals = sequelize.define('HealthcareProfessionals', {
    professional_id: {
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
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    license: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    schedule: {
        type: DataTypes.TEXT
    },
    position: {
        type: DataTypes.TEXT
    },
    specialization: {
        type: DataTypes.TEXT
    },
    years_of_experience: {
        type: DataTypes.INTEGER
    },
    certification: {
        type: DataTypes.TEXT
    },
    current_shift: {
        type: DataTypes.TEXT
    },
    professional_type: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'professionals',
    timestamps: false
});

module.exports = HealthcareProfessionals;