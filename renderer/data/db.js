const Datastore = require('nedb-promises')

module.exports = {
    diagnosis: Datastore.create({
        filename: './database/diagnosis.db', // provide a path to the database file 
        autoload: true, // automatically load the database
        timestampData: true // automatically add and manage the fields createdAt and updatedAt
    }),
    diseases: Datastore.create({
        filename: './database/diseases.db', // provide a path to the database file 
        autoload: true, // automatically load the database
        timestampData: true // automatically add and manage the fields createdAt and updatedAt
    }),
    patients: Datastore.create({
        filename: './database/patients.db', // provide a path to the database file 
        autoload: true, // automatically load the database
        timestampData: true // automatically add and manage the fields createdAt and updatedAt
    }),
    symptoms: Datastore.create({
        filename: './database/symptoms.db', // provide a path to the database file 
        autoload: true, // automatically load the database
        timestampData: true // automatically add and manage the fields createdAt and updatedAt
    }),
    updates: Datastore.create({
        filename: './database/updates.db', // provide a path to the database file 
        autoload: true, // automatically load the database
        timestampData: true // automatically add and manage the fields createdAt and updatedAt
    }),
}