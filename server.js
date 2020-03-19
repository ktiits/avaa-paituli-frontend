const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const port = 3000
var public = path.join(__dirname, 'public');

app.use(cors());
app.options('*', cors());

app.use(express.static('public'))
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'paituli-ui.html'));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))