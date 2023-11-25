import mongoose from 'mongoose';

const ProductScema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    description: String,
    discount:String,
    tagline:String

})

  const Products = new mongoose.model("Product", ProductScema );


export default Products