import mongoose , {Schema} from 'mongoose';

const GroupSchema = new Schema ({

name:{
	type:String,
	required: true,
	unique:true,
	minlength:[5,"Name must be 5 characters or more"]
},

description:{
	type:String,
	required: true,
	minlength:[10,"Name must be 10 characters or more"]
},
category:{
	type:String
},
meetups:[{

type:Schema.Types.ObjectId,
ref:'Meetup'

}]

}, {timestamps:true});

export default mongoose.model('Group', GroupSchema);