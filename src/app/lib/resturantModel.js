import mongoose from "mongoose";

const resturantModel = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
export const resturantSchema =
  mongoose.models.resturants || mongoose.model("resturants", resturantModel);
