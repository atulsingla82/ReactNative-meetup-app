import Group from './model';

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
}else if (name.length < 5 )

{
  return res.status(400).json({error:true, message:"Name must have at least 5 characters "});
}

if (!description){
  
  return res.status(400).json({error:true, message:"Please provide a description"});
} else if (typeof name !== "string"){
  return res.status(400).json({error:true, message:"Description must be a string"});
}else if (name.length < 10 ){
  return res.status(400).json({error:true, message:"Description must have at least 10 characters "});
}

const group = new Groupsmigration({name, description} )
	

try {

  return res.status(201).json({error:false,meetup: await group.save()})

} catch (e){

	return res.status(e.status).json({error:true, message:'Error with the group'});
}

};
