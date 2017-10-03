const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const routes = require('./server/routes');

const mongodb = process.env.ENV === 'production' ? 'mongodb://emma:Aa123123@ds143734.mlab.com:43734/mystreet' : 'mongodb://localhost/giftcard';
mongoose.connect(mongodb);

app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));
app.use(routes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});