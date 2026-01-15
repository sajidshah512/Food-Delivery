// // import foodModel from "../models/foodModel";
// import foodModel from "../models/foodModel.js";
// import fs from "fs";

// // add food Item

// const addFood = async (req, res) => {
  
//   // let image_filename = `${req.file.filename}`;
//   let image_filename = req.file?.filename || "default.jpg";


//   const food = new foodModel({
//     name: req.body.name,
//     description: req.body.description,
//     price:req.body.price,
//     category:req.body.category,
//     image: image_filename
//   });
//   try{
//     await food.save();
//     res.json({success:true, message: "Food Added"})
//   } catch(error) {
//     console.log(error);
//     res.json({success:false, message: "Error"});
//   }
// }

// export {addFood};


import foodModel from "../models/foodModel.js";
import fs from "fs";

// Add food item controller
const addFood = async (req, res) => {
  // Use uploaded image or fallback to default
  let image_filename = `${req.file.filename}` || "default.jpg";

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename // public URL
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// all food list
const listFood = async (req, res) => {
  try{
    const foods = await foodModel.find({});
    res.json({success:true, data: foods})
  } catch(error) {
     console.log(error);
     res.json({successLfalse, message: "Error"})
  }
}

// remove food items
const removeFood = async (req, res) => {
  try{
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({success:true, mesage: "Food Removed"})
  } catch(error) {
    console.log(error);
    res.json({success:false, message:"Error"});
  }
}

export { addFood, listFood, removeFood };
