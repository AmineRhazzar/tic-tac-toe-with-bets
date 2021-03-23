const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', (req, res) => {
    res.send("HELOO");
})



app.get('/testroom', (req, res) => {
    fs.readFile(path.join(__dirname, 'testroom.json'), (err, data) => {
        res.send(JSON.parse(data));
    })
})

app.post('/testroom', (req, res) => {
    fs.writeFile(path.join(__dirname, 'testroom.json'), JSON.stringify(req.body), () => {
        res.send(req.body);
    })
})

const PORT = process.env.port || process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
});