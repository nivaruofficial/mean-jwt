var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.json());

//app.use('/',require('./controllers/static'));

app.use(require('./auth'))
app.use(require('./controllers'));


app.listen(3000, function(){
   console.log('Server running on port 3000');
});
