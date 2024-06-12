const express = require('express');
const cors = require('cors');
const app = express();

let arr = [];
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: '*'
}));
const clientRoutes = require('./users');
app.use('/client', clientRoutes);
app.use(postData())
app.post('/', (req, res) => {
    arr.push(req.body);
    console.log(arr)
    res.sendStatus(201);
});

app.delete('/delete', (req, res) => {
    arr.indexOf(req.body);
    if (req.body > -1) {
        array.splice(req.body, 1);
    }

})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});