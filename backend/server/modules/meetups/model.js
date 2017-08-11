import mongoose, {Schema} from 'mongoose';

const MeetupSchema = new Schema ({
  
title:{
	type:String,
	required:true,
	minLength:[5, "At least 5 characters long"]
},

description:{
    type:String,
	required:true,
	minLength:[10, "At least 10 characters long"]

} ,

eventDate:{
	type:Date
},

group:{

	type:Schema.Types.ObjectId,
	ref:'Group'
}


},{timestamps:true});

export default mongoose.model('Meetup',MeetupSchema);