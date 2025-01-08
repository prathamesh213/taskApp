const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => { 
    res.status(200).json({ message: 'User registered.' });
});


const loginUser = asyncHandler(async (req, res) => {    
    res.status(200).json({ message: 'User logged in.' });
}  );



const getCurrentUser = asyncHandler(async (req, res) => {    
    res.status(200).json({ message: 'Current user.' });
}   );

module.exports = { registerUser, loginUser, getCurrentUser };    