import { Nitro } from "nitropack";
import mongoose from "mongoose";

export default async (_nitroApp: Nitro) => {
  const {MONGODB_URL} = useRuntimeConfig()


  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGODB_URL);
    console.log("connected to mongo");
   
  } catch (error) {
    console.log(error);
  }
};