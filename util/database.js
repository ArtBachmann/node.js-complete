const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let _db;


const mongoConnect = callback => {
  MongoClient.connect('mongodb+srv://Artb:2kama2@cluster0-ykkdr.mongodb.net/shop?retryWrites=true')
    .then(client => {
      console.log('Connected!')
      _db = client.db()
      callback()
    })
    .catch(err => {
      console.log(err)
      throw err
    })
}

const getDb = () => {
  if (_db) {
    return _db
  }
  throw 'No database...'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb

