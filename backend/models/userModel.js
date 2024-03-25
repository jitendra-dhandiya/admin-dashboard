import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Enter Username"],
    unique: [true, "Username Already Exists"],
  },
  password: { type: String, required: [true, "Password is Requierd"] },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: [true, "Email Already Exists"],
  },
  firstName: { type: String },
  lastName: { type: String },
});
const virtual = userSchema.virtual('id');
virtual.get(function () {
  return this._id;
});

userSchema.set('toJSON',{
  virtuals: true,
  versionKey: false,
  transform:(doc,ret,next)=>{
    delete ret.password;
    delete ret._id;
    return ret
  }
})

const userModel = mongoose.models.users || mongoose.model("users", userSchema)

export default userModel;