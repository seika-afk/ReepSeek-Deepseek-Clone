import mongoose from "mongoose";

const UserSchema=new mongoose.Schema(
	{
		_id:{type:String,required:true},
		name:{type:String,required:true},
		email:{type:String,require:true},
		image:{type:String,require:false}



	},{timestamps:true}

);

const User =mongoose.model.User || mongoose.model("User", UserSchema)

export default User;
