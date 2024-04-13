
//Import the Todo Model
const Todo=require("../models/ToDo")

exports.createTodo=async(req,res)=>{
    try{
        //extract title and description from request Body
        const {title,description}=req.body
        //create a new Todo Obj and insert in DB
        const response=await Todo.create(
             { title,description }
        );

        //send a json response with a succes flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry Created Successfully",
            }
        )
    }
    catch(err)
    {
        console.error(err);
        console.log(err);
        res.status(505)
        .json({

        })
    }
}