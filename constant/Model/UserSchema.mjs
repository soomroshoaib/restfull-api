import mongoose from "mongoose";
import validator from "validator";




const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    require: true,
    trim: true,
    //trime mean laft and right side space remove
  },
  email: {
    type: String,
    require: true,
    unique:true,
    validator(value){
      if(!validator.isEmail(value)){
        throw new Error ("not valid email address")

      }
    }

  },
  mobile: {
    type: String,
    require: true,
    unique:true,
    maxContentLength: 11,
  },
  Password: {
    type: String,
    require: true,
    minlength: 6
  },
  cPassword: {
    type: String,
    require: true,
    minlength: 6
  },

  /// jwt token 
  token :[
    {
      token: {
        type: String,
        required: true
      }
    }
  ] ,
  carts :Array 
});


/////create Collection Model


const USER = new mongoose.model("USER", UserSchema)


  export default USER