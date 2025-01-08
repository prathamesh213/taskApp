const express  = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000;
const app = express();

const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./Connect/database');
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/users', require('./routes/userRoutes'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);





connectDB();

