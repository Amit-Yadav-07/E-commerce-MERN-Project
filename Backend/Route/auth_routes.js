let mongoose = require('mongoose');
let express = require('express');
let Model = require('../Models/userModel');
let route = express.Router();
let bcrypt = require("bcrypt");
let cors = require('cors');
let JWT = require("jsonwebtoken");
let env = require('dotenv')
let { isAuthenticated } = require('../Middleware/ProtectedRoute');
env.config();


// ====================== just Check -------------------


route.post('/api/Dashboard', isAuthenticated, async (req, res) => {

    let request = req.headers;
    console.log(request);
    res.send('Middleware is working');

})
// ====================== just Check -------------------



//-------------------------Register--------------------------------

route.post('/register', async function (req, res) {

    console.log(req.body);
    // we store user values in a variable coming from frontend register form 
    let { name, email, password } = req.body;


    // from there checking saari fields user enter kar raha hai agar koi fields empty hongi then send send message: 'All Fields are Required !

    if (!name || !email || !password) {
        return res.status(500).json({ message: 'All Fields are Required !' })
    }

    //  here i am checking the wo user aaya hai uski emailID existing user se match to nhi kr rhi agar kr rhi hai to message: 'User Already Exist !
    let userMailFound = await Model.findOne({ email: email });

    if (userMailFound) {
        return res.status(400).json({ message: 'User Already Exist !' });
    }
    // agar sb teek hai to user new user jo aaya hai uska password HASH kr denge 
    let HashedPassword = await bcrypt.hash(password, 10)
    console.log(HashedPassword);

    // then we store new user data in the database 
    try {
        let userData = await Model.create({ name, email, password: HashedPassword });

        // 
        let Payload = {
            name: name,
            email: email,
            email: email,
            role: userData?.role

        }

        //    console.log(`Coming from Payload ${Payload.name}`);

        let jwtToken = JWT.sign(Payload, process.env.SECRET_KEY, { expiresIn: process.env.LIFE_TIME })
        console.log(jwtToken);
        return res.status(201).json({ message: 'User Registered Successfully !', token: jwtToken, user: { ...userData, token: jwtToken } })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'invalid Credentials !' })
    }


})


// ------------------------login--------------------------------------------

route.post('/login', async (req, res) => {

    let { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
        return res.status(500).json({ message: 'All Fields are required' });
    }
    let user = await Model.findOne({ email: email });
    if (!user) {
        return res.status(500).json({ message: 'Invalid credentials !' });
    }
    try {
        let isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {

            return res.status(500).json({ message: 'Invalid credentials' });
        }

        let Payload = {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }

        let Token = JWT.sign(Payload, process.env.SECRET_KEY, { expiresIn: process.env.LIFE_TIME })

        //  console.log('Coming from Payload ' + Token);
        return res.status(200).json({ message: 'user Login Successfully', Token, user: { ...Payload, token: Token } });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Invalid Credentials ' })
    }

})



module.exports = route;




