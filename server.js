const express = require('express');
const sequelize = require('./config/connection');

const model = require('./models/users')
// Need more of these?

const app = express();
const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    });
});


// Step by step notes

// 1. Create package.json file & download started npm packages (will download more as needed along the way)
// 2. Create Server (server.js file)
// 3. Create Database (schema.sql file in db folder)
// 4. Connect Database to server (connection.js in config folder)
// 5. Secure DB credentials (.env file)
// 6. Create DB tables (models folder)

// To do

// Continue in video minute 1:41:30
// Create Models 