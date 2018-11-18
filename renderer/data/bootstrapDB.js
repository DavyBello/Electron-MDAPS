const db = require('./db');

const diagnosis = require('./init/diagnosis');
const diseases = require('./init/diseases');
const patients = require('./init/patients');
const symptoms = require('./init/symptoms');

module.exports = async () => {
    try {
        const doc = await db.updates.findOne({ isPopulated: true });
        if (!doc) {
            console.log('Populating DB')
            db.diagnosis.insert(diagnosis);
            db.diseases.insert(diseases);
            db.patients.insert(patients);
            db.symptoms.insert(symptoms);
            db.updates.insert({ isPopulated: true });
        }
    } catch (error) {
        console.log(error);
    }
}