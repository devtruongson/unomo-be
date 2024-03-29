const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('postgres', 'postgres', 'rXt1DeBXH7Py3y3T', {
    host: 'db.zgskgucytboiquriwvad.supabase.co',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            required: true,
            rejectUnauthorized: false,
        },
    },
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = connectDB;
