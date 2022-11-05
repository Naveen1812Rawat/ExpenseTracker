const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send(`Hello world from the server router js`);
});


// Registration Route
router.post("/register", (req, res)=>{
    const { username, email, password, cpassword} = req.body;
    console.log(req.body);
    if(!username || !email || !password || !cpassword){
        return  res.status(422).json({error: "Input Fields are missing"});
    }

    User.findOne({ email: email})
        .then((userExists)=>{
            if(userExists){
                return res.status(422).json({error: "Email Already Exists" });
            }

            const user = new User({username, email, password, cpassword});
            user.save().then(()=>{
                res.status(201).json({ message: "User Registered Successfully" });
            }).catch((err)=>{
                res.status(500).json({ error: "Failed to register"});
            })
        }).catch(err => {console.log(err); });

});

// Login Route

router.post('/login', (req, res)=>{
    const { username, password} = req.body;

    if(!username || !password){
        return  res.status(422).json({error: "Input Fields are missing"});
    }

    User.findOne({username: username})
        .then((userLogin)=>{
            res.status(201).json({ message: `User's database found`});
        }).catch(err => {console.log("Invalid User"); });
    
    User.findOne({password: password})
    .then((userLogin)=>{
        res.status(201).json({ message: `User's database found`});
    }).catch(err => {console.log("Invalid User"); });
});

// Dashboard Route

router.post('/dashboard', (req, res)=>{
    console.log(req.body);
    const { category, type, date, Ename, amount} = req.body;

    const user = new User({category, type, date, Ename, amount});
    user.save().then(()=>{
        res.status(201).json({ message: "Data added Successfully" });
    }).catch(()=> {
        res.status(403).json({ message: "unable to save data please try again"});
        console.log("unable to save data please try again");
    });
   
});

module.exports = router;