
const express = require('express');
const connectDB = require('./config/db');

// connect database

connectDB();

const app = express();

app.get('/', (request, response) => response.json({msg: 'Welcome to the Contact Keeper API'}));

// Define Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
