const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env'});

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log(`Connected`);
}).catch((err) => console.log(`not connected ${err}`));