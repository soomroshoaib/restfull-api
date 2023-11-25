import Products  from "./constant/Model/ProductSchema.mjs"

import productdata from './constant/Productdata.mjs'


  const defultData = async ()=>{
    
    try{
        await Products.deleteMany({})
        const datastore = await Products.insertMany(productdata);
        console.log(datastore) 

    }catch (error){
        console.log("error", error.message)
    }
}

 export default defultData