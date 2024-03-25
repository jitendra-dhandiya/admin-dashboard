import mongoose from "mongoose";

const visitorsSchema = new mongoose.Schema({
    visitors:Number,
    location:String,
    device:String,
    premiumUserNo:Number,
    month:String,
})

const virtual = visitorsSchema.virtual('id');
virtual.get(function(){
    return this._id;
});
visitorsSchema.set('toJSON',{
    virtuals:true,
    versionKey:false,
    transform:(doc,ret,next)=>{
        delete ret._id;
        return ret
    }
})

const visitorModel = mongoose.models.visitors || mongoose.model("visitors",visitorsSchema)

export default visitorModel;