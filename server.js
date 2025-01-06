console.log("Server Started");
const express  = require('express');
const dotenv = require('dotenv').config();

const port = process.env.PORT||8000;
const app = express();

// const connectDB = require('./Connect/database');
// connectDB();



app.use('/api/tasks', require('./routes/taskRoutes'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, ()=>{
    console.log( `Server starting on port ${port}`);
});