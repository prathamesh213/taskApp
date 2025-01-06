const asyncHandler = require("express-async-handler");


    const getTask = asyncHandler(  (req, res) => {
    res.status(200).json({ message: "Get All Tasks controllers" });
    });

    const setTask = asyncHandler((req, res) => {
    console.log(req.body);
    res.status(200).json({ message: "Create Task" });
    });

    const updateTask = asyncHandler((req, res) => {
    res.status(200).json({ message: `Task ${req.params.id}
    updated.` });
    });
    const deleteTask = asyncHandler((req, res) => {
    res.status(200).json({ message: `Task ${req.params.id}
    deleted.` });
    });
   

module.exports = { getTask, setTask, updateTask, deleteTask };