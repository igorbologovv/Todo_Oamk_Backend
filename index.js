// index.js
const express = require('express');
const cors = require('cors');
const db = require('./db');
const todoRouter = require('./routes/todo'); // Import todoRouter

const app = express();
const port = process.env.PORT ;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mount the todoRouter at the base path '/todos'
app.use('/', todoRouter); 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
