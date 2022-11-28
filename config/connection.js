const { connect, connection } = require('mongoose');

connect('mongodb://localhost/SNDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

module.exports = connection;