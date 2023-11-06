import mongoose from "mongoose";

let todoSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
export default mongoose.model("todo",todoSchema);