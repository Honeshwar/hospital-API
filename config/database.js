const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/HOSPITAL_API'); //.then(() => {
//     console.log("Successfully connecting with mongoodb")
// }).catch(() => {
//     console.log("Error in connecting with mongoodb")
// });


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connecting with mongoodb'));
db.once('open', ()=>{
    console.log("Successfully connecting with mongoodb");
});

module.exports = db;