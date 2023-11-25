import express from 'express';
 import "./db/connection.mjs"
 import './constant/Model/ProductSchema.mjs'
 import defult from './defultdata.mjs'
 import cors from 'cors';
 import router from './route/Router.mjs'
 

const app = express();
app.use(express.json())
app.use(cors())
app.use(router)


const port = 3001;

app.listen(port,()=>{
    console.log(`you server is working ${port}`)
})


defult()



// let dbURI = 'mongodb://12345:soomro@ac-6nitjju-shard-00-00.zgchtqh.mongodb.net:27017,ac-6nitjju-shard-00-01.zgchtqh.mongodb.net:27017,ac-6nitjju-shard-00-02.zgchtqh.mongodb.net:27017/Ecommerce?ssl=true&replicaSet=atlas-u8i189-shard-0&authSource=admin&retryWrites=true&w=majority';
// mongoose.connect(dbURI).then(()=>console.log("your data base connected ")).catch((error)=>console.log("your are data base error ", error))
