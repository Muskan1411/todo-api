// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    var db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

//     db.collection('Users').insertOne({
//         name: 'Muskan Agarwal',
//         age: 19,
//         location: 'Jpr'
//     }, (err, result) => {
//         if(err) {
//             return console.log('Unable to insert user', err);
//         }

//         console.log(JSON.stringify(result.ops, undefined, 2));
//     })

//     client.close();
// 
});


/// ES6 DESTRUCTURING ///
// var user = {name: 'Muskan', age: 19};
// var {name} = user;
// console.log(name); // output - Muskan
///////////////////////////////