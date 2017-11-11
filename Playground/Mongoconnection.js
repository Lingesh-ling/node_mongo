const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todo',(err, db) => {
  if(err) {
    return concole.log('some error')
  }
  console.log('success');

  db.collection('users').insertOne({
    Name:'Lingesh',
    Age: 25
  }, (err, result) => {
    if(err) {
      return console.log(err)
    }
    console.log(result.ops[0]._id.getTimestamp());

  });

  db.close();
});
