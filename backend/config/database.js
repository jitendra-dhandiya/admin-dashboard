import mongoose from "mongoose";

let MONGO_URL = process.env.MONGO_URI;

const connect_DB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://jatindhandiya1:FDKTHfsNtaXW7TsDbvjdfgfvjARFDGFYH@cluster0.vj2lxos.mongodb.net/Admin-Dashboard?retryWrites=true&w=majority").then(()=>{
      console.log("database connected successfully")
    })
   
  } catch (error) {
    console.error("Database Connection", error);
    process.exit();
  }
};

export default connect_DB;
