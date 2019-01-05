const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost/12017', (err, client) => {
    if(err) {
        return console.log('Unable to Connect');
    }
    var db = client.db('TodoApp');
    console.log('Connection established');

    db.collection('Todos').findOneAndUpdate(
        {
            text: 'Eat Lunch'
        },
        {
             $set: {completed: true}
        },
        {
            returnOriginal: false
        }
        ).then((result) => {
        console.log(result);
    })

    // db.collection('Users').findOneAndUpdate(
    //     {
    //         name: 'Muskan Agarwal'
    //     }, 
    //     {
    //         $inc: {age: 1},
    //         $set: {name: 'Muskan'}
    //     }, {
    //         returnOriginal: false
    //     }
    // ).then((result) => {
    //     console.log(result);
    // })
})