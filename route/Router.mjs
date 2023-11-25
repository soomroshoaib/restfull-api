import express from "express";
const Route = new express.Router();
import Products from "../constant/Model/ProductSchema.mjs";
import USER from "../constant/Model/UserSchema.mjs";

// GET PRODUCTDATA API
Route.get("/getproducts", async (req, res) => {
  try {
    const productdata = await Products.find();
    // console.log("console data " , productdata)
    res.status(201).json(productdata);
  } catch (error) {
    console.log("error", error.message);
  }
});

// Get individual data

Route.get("/getproductsone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id)

    const individualdata = await Products.findOne({ id: id });
    // console.log(individualdata + "individual data ")
    res.status(201).json(individualdata);
  } catch (error) {
    res.status(400).json(individualdata);
    console.log("error", error.message);
  }
});

// register data User
Route.post("/register", async (req, res) => {
  // console.log(req.body)

  const { fname, email, mobile, password, cpassword } = req.body;

  if (!fname || !email || !mobile || !password || !cpassword) {
    res.status(422).json({ error: "Please Fill the All data " });
    console.log("your data is not available ");
  }

  try {
    const preuser = await USER.findOne({ email: email });

    if (preuser) {
      res.status(422).json({ error: "this user is already present" });
    } else if (password !== cpassword) {
      res.status(422).json({ error: "password and cpassworld not match" });
    } else {
      const finalUser = new USER({
        fname,
        email,
        mobile,
        password,
        cpassword,
      });
      const storeData = await finalUser.save();
      console.log(storeData);
      res.status(201).json(storeData);
    }
  } catch (error) {
    console.log("");
  }
});

export default Route;
