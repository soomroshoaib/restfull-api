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
defult()


const port = 3001;

app.listen(port,()=>{
    console.log(`you server is working ${port}`)
})





