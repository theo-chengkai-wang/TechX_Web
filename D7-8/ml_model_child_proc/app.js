const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const multer = require('multer')
const upload = multer({
    dest: 'uploads/'
});

const predict = require('./predict');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send('Please upload an image file of a single number, with a WHITE BACKGROUND');
});

app.post('/', upload.single('file'), async function (req, res) {
    if (!req.file) {
        res.status(400).send("No file uploaded")
    }
    console.log("file name: " + req.file.filename);
    console.log("mimetype: " + req.file.mimetype);
    const result = await predict(`./uploads/${req.file.filename}`);
    console.log("result: " + result);
    res.status(200).send(result);

})

module.exports = app;