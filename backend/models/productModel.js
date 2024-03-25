import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    visitors:Number,
    sales:Number,
    month:String,
})

const virtual = productSchema.virtual('id');
virtual.get(function () {
  return this._id;
});

productSchema.set('toJSON',{
  virtuals: true,
  versionKey: false,
  transform:(doc,ret,next)=>{
    delete ret._id;
    return ret
  }
})
const productModel = mongoose.models.products || mongoose.model("products",productSchema);

export default productModel;