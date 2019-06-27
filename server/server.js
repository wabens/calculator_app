const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

const calculator = require('./router/routes');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/calculator', calculator);

app.listen(PORT, () => {
  console.log('Now listening on port: ', PORT);
});
