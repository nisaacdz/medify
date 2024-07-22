import { Pool } from 'pg';

// Create a pool instance to manage connections
const pool = new Pool({
    user: 'your_database_user',
    host: 'your_database_host',
    database: 'your_database_name',
    password: 'your_database_password',
    port: 5432, // Default PostgreSQL port
});

async function registerNewPatient(patient) {
    const fields = Object.keys(patient).join(', ');
    const values = Object.values(patient);
    const placeholders = values.map((_, index) => `$${index + 1}`).join(', ');

    const query = `
      INSERT INTO patient (${fields})
      VALUES (${placeholders})
      RETURNING *;
    `;

    try {
        const client = await pool.connect();
        try {
            const res = await client.query(query, values);
            return { success: true, patient: res.rows[0] }; // Return the inserted patient info
        } finally {
            client.release(); // Release the client back to the pool
        }
    } catch (error) {
        console.error('Error executing query', error);
        return { error: true, message: error.message }; // Return an error object
    }
}

// (async () => {
//     const newPatient = {
//         first_name: 'John',
//         last_name: 'Doe',
//         other_names: null,
//         date_of_birth: 19800101,
//         address: '123 Main St',
//         email: 'johndoe@example.com',
//         sex_chromosome: 'XY',
//         blood_type: 'O+',
//         phone: '123-456-7890',
//         medical_history: 'No known allergies',
//         emergency_contact_name: 'Jane Doe',
//         emergency_contact_phone: '987-654-3210',
//         insurance_provider: 'Health Insurance Co.',
//         insurance_policy_number: 'ABC1234567'
//     };

//     const result = await registerNewPatient(newPatient);

//     if (result.error) {
//         console.log('An error occurred:', result.message);
//     } else if (result.success) {
//         console.log('New patient registered successfully:', result.patient);
//     }
// })();

async function updatePatientInfo(patientId, infoName, newValue) {
    const query = `
      UPDATE patient
      SET ${infoName} = $1
      WHERE patient_id = $2
    `;

    try {
        const client = await pool.connect();
        try {
            const res = await client.query(query, [newValue, patientId]);
            if (res.rowCount === 0) {
                return { notFound: true }; // No patient found with the given ID
            }
            return { success: true }; // Update successful
        } finally {
            client.release(); // Release the client back to the pool
        }
    } catch (error) {
        console.error('Error executing query', error);
        return { error: true, message: error.message }; // Return an error object
    }
}

// (async () => {
//     const patientId = 1; // Example patient ID
//     const infoName = 'email'; // Column to update
//     const newValue = 'newemail@example.com'; // New value for the column

//     const result = await updatePatientInfo(patientId, infoName, newValue);

//     if (result.error) {
//         console.log('An error occurred:', result.message);
//     } else if (result.notFound) {
//         console.log('Patient not found.');
//     } else if (result.success) {
//         console.log('Patient info updated successfully.');
//     }
// })();

async function getPatientInfo(patientId) {
    const query = `
      SELECT *
      FROM patient
      WHERE patient_id = $1
    `;

    let client;
    try {
        client = await pool.connect();
        const res = await client.query(query, [patientId]);
        if (res.rows.length === 0) {
            return { notFound: true }; // No patient found with the given ID
        }
        return { patient: res.rows[0] }; // Return the patient info as an object
    } catch (error) {
        console.error('Error executing query', error);
        return { error: true, message: error.message }; // Return an error object
    } finally {
        if (client) {
            try {
                client.release();
            } catch (releaseError) {
                console.error('Error releasing client', releaseError);
            }
        }
    }
}

// (async () => {
//     const patientId = 1;
//     const result = await getPatientInfo(patientId);

//     if (result.error) {
//         console.log('An error occurred:', result.message);
//     } else if (result.notFound) {
//         console.log('Patient not found.');
//     } else {
//         console.log('Patient Info:', result.patient);
//     }
// })();

export default { getPatientInfo, updatePatientInfo };