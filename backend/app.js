const express = require('express');
const app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoUrl = "mongodb+srv://Hargun_EBooksLibray:VCW1dyrFmoecISep@cluster0.9mmezhn.mongodb.net/?retryWrites=true&w=majority";
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')

var db;

const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());




//home route or first default route
app.get('/', (req, res) => {
    res.send("<h1>Welcome</h1>");
})

app.get('/books', (req,res)=> {
    db.collection('books').find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})

app.get('/books/type/:type', (req,res)=> {
    let type = req.params.type;
    db.collection('books').find({"type": type}).toArray((err,result)=> { 
        if (err) throw err;
        res.send(result);
    })
})

app.get('/books/:title', (req,res)=> {
    let title = req.params.title;
    console.log(title)
    db.collection('books').find({"title": title}).toArray((err,result)=> { 
        if (err) throw err;
        res.send(result);
    })
})

app.get('/api/auth/register', (req,res)=> {
    db.collection('users').find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
    
})

app.post('/api/auth/register', async (req,res)=> {
    const data = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    db.collection('users').insertOne(data, (err, result)=> {
        if(err) throw err
    })
})

app.post('/contact', (req,res)=> {
    const data = {
        name: req.body.name,
        email: req.body.email,
        pnumber: req.body.pnumber,
        concern: req.body.concern
    }
    db.collection('contact').insertOne(data, (err, result)=> {
        if(err) throw err
    })
})

app.get('/contact', (req,res)=> {
    db.collection('contact').find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})


app.get('/search', (req,res)=> {
    let key = req.query.key
    db.collection('books').find({"title":key}).toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})

app.post('/feedback', (req,res)=> {
    const data = {
        name: req.body.name,
        email: req.body.email,
        comments: req.body.comments
    }
    db.collection('feedback').insertOne(data, (err, result)=> {
        if(err) throw err
    })
})

// // connect with mongodb
MongoClient.connect(mongoUrl,(err,client)=> {
    if (err) console.log("Error while establishing connection");
    db = client.db('EBooksLibrary');
    app.listen(port, () => {
        console.log(`The application started successfully on port ${port}`);
    })
});
