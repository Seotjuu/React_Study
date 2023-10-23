var express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')
var app = express();
const port = 4000

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/post/postList', (req, res) => {
        res.send({
            id: 2,
            user: "어쩔방구",
            title: "제목제목",
            content: "내용내용"
        });
    });
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })