var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/social', function(){
   console.log('Mongodb connected succesfully');
});

module.exports = mongoose;