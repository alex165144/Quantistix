if(process.env.NODE_ENV !== 'production')
{    
const dotenv = require("dotenv");

dotenv.config();
}

const express=require('express');
const app=express();
const expressLayouts=require('express-ejs-layouts');

const indexrouter=require('./routes/index');
const ESGrouter=require('./routes/ESG');
const mongoose=require('mongoose');
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true, useUnifiedTopology: true});

const bodyParser = require('body-parser');
const db= mongoose.connection;

db.on('error', error => console.error(error));
db.once('open',() => console.log('Connected to Mongoose'));



app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.set('layout','layouts/layout');

app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.use('/',indexrouter);
app.use('/ESG',ESGrouter);
app.use(bodyParser.urlencoded({limit:'10mb',extended:false}));
app.use(bodyParser.json());

app.listen(process.env.PORT || 8080);
