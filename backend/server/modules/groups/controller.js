import Group from './model';
import { Meetup } from '../meetups'
export const createGroup = async (req, res) => {

	const {
		name,
		description,
		category

	} = req.body;


if (!name){
  
  return res.status(400).json({error:true, message:"Please provide a name"});

} else if (typeof name !== "string")

{
  return res.status(400).json({error:true, message:"Name must be a string"});
} 
  else if (name.length < 5 )

{
  return res.status(400).json({error:true, message:"Name must have at least 5 characters "});
}

if (!description){
  
  return res.status(400).json({ error:true, message:"Please provide a description"});
} else if (typeof description !== "string"){
  return res.status(400).json({error:true, message:"Description must be a string"});
} else if (description.length < 10 ){
  return res.status(400).json({error:true, message:"Description must have at least 10 characters "});
}

const group = new Group({name, description} )
	

try {

  return res.status(201).json({error:false,group: await group.save()})

} catch (e){

	return res.status(e.status).json({error:true, message:'Error with the group'});
}

};

export const createGroupMeetup = async (req, res ) => {

	const {title, description} = req.body;
	const { groupId } = req.params;


if (!title){
  
  return res.status(400).json({error:true, message:"Please provide a title"});

} else if (typeof title !== "string")

{
  return res.status(400).json({error:true, message:"Title must be a string"});
}
  else if (title.length < 5 )

{
  return res.status(400).json({error:true, message:"Title must have at least 5 characters "});
}

if (!description){
  
  return res.status(400).json({ error:true, message:"Please provide a description"});
} else if (typeof description !== "string"){
  return res.status(400).json({error:true, message:"Description must be a string"});
} else if (description.length < 10 ){
  return res.status(400).json({error:true, message:"Description must have at least 10 characters "});
}

if (!groupId){
  
  return res.status(400).json({error:true, message: "Please provide a Group Id"});

} 

try {

 const {meetup , group} = await  Group.addMeetup(groupId,{title,description});

 return res.status(201).json({error:false, meetup , group});

} catch(e){
	return res.status(400).json({error:true, message:"Meetup cannot be created"});
}
};

export const getGroupMeetups = async ( req, res ) => {

  const { groupId } = req.params;

  if (!groupId) {

    return res.status(400).json({error:true, message:"Please provide a group Id"});

}
const group = await Group.findById(groupId);

if (!group) {

  return res.status(400).json({error:true, message:"Group does not exist"});
}

try {

 return res.status(200).json({

  error:false,
  meetups: await Meetup.find ({ group:groupId }).populate('group', 'name')

 })

} catch(e){
  return res.status(400).json({error:true, message:"Cannot fetch Meetup"});
}
};


