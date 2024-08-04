// Server things
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// npm packages
const sequelize = require('./config/connection');
const session = require('express-session');
const hbs = require('express-handlebars');
const path = require('path');

// Calling models
const model = require('./models');

// Calling the routes
const routes = require('./controllers');

// Middleware
app.use(session({
    secret: 'your_secret_key_here',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

// Data things
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars setup
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use(routes);

// Sync with sequelize and Initialize server
sequelize.sync({ force: true }).then(() => {
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
