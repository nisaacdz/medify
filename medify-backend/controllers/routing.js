import { Patients } from '../models/patients.js';
import { Sessions } from '../models/sessions.js';
import { MedicalTests, Appointments, Prescriptions } from '../models/data.js';
import { HealthcareProfessionals } from '../models/professionals.js';

export const getPatients = async (req, res) => {
    try {
        const patients = await Patients.findAll();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getSessions = async (req, res) => {
    try {
        const sessions = await Sessions.findAll();
        res.json(sessions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getMedicalTests = async (req, res) => {
    try {
        const medicalTests = await MedicalTests.findAll();
        res.json(medicalTests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointments.findAll();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getPrescriptions = async (req, res) => {
    try {
        const prescriptions = await Prescriptions.findAll();
        res.json(prescriptions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getHealthcareProfessionals = async (req, res) => {
    try {
        const healthcareProfessionals = await HealthcareProfessionals.findAll();
        res.json(healthcareProfessionals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}