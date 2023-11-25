import mongoose from 'mongoose'
mongoose.set('strictQuery', true);
let dbURI = 'mongodb://12345:Soomro123 @ac-6nitjju-shard-00-00.zgchtqh.mongodb.net:27017,ac-6nitjju-shard-00-01.zgchtqh.mongodb.net:27017,ac-6nitjju-shard-00-02.zgchtqh.mongodb.net:27017/Ecommerce?ssl=true&replicaSet=atlas-u8i189-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(dbURI);

////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on('connected', function () {//connected
    console.log("Mongoose is connected");
});

mongoose.connection.on('disconnected', function () {//disconnected
    console.log("Mongoose is disconnected");
    process.exit(1);
});

mongoose.connection.on('error', function (err) {//any error
    console.log('Mongoose connection error: ', err);
    process.exit(1);
});

process.on('SIGINT', function () {/////this function will run jst before app is closing
    console.log("app is terminating");
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed');
        process.exit(0);
    });
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////

