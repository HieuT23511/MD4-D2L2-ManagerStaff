const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./src/routers/web.router');
const fileUpload =  require('express-fileupload');

const app = express();
const PORT = 8888;

//cau hinh views:
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'src/views'));

//cau hinh body-parser:
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cau hinh static file
app.use(express.static('public'));

//cau hinh file upload:
app.use(fileUpload({createParentPath: true}));

//router:
app.use(router)


app.listen(PORT,'localhost',()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})