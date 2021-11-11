var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
console.log("11");
mongoose.connect('mongod://localhost:27017/NearBy11',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log("16");
var db = mongoose.connection;
console.log("19");
db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))
console.log("22");
app.post("/sign_up",(req,res)=>{
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var password = req.body.password;
    var city = req.body.city;
    var state = req.body.state;
    var zipcode = req.body.zipcode;

    var data = {
        "firstname": firstname,
        "lastname": lastname,
        "email" : email,
        "mobile": mobile,
        "password": password,
        "city": city,
        "state": state,
        "zipcode": zipcode
        
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('signup_success.html')

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3000);


console.log("Listening on PORT 3000");