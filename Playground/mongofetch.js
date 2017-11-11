// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/todo',(err, db) => {
  if(err) {
    return concole.log('some error')
  }
  console.log('success');

  // db.collection('users').find({_id:new ObjectID('5a069ae05038872160f3b506')}).toArray().then((res) => {
  //   console.log(res)
  // }, (err) => {
  //   console.log(err);
  // })


  // db.collection('users').find().count().then((res) => { console.log(res)},  (err) => {});

  db.collection('marks').findOneAndDelete({maths:100}).then((res) => {
    console.log(res);
  })

  db.close();
});
