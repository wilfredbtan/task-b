const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URL, {
mongoose.connect(
    'mongodb+srv://cs3219:GjYjZvF1tPHb5aRw@cs3219.df9od.mongodb.net/cat-manager-api-test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

console.log(mongoose.connection.collections);

beforeEach((done) => {
    mongoose.connection.collections.cats.drop(() => {
        done();
    });
});
