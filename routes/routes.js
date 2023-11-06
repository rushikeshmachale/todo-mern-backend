import express  from "express";
import Todo from '../model/todo.js'
const route = express.Router()

route.get('/get/:id',async(req,res)=>{
    const {id} = req.params
    const t = await Todo.findById(id)
    res.status(200).json(t);
})

route.post('/add',async(req,res)=>{
    try {
        const {task}=req.body
        const name = await Todo.findOne({task})
        if(name){
            res.status(404).send("task already present");
        }else{

            const todo = new Todo({task})
            await todo.save();
            res.status(200).send("todo posted success")
        }
    } catch (error) {
        console.log(error);
        res.status(402).send("error while posting")
    }
})

route.get('/getall',async(req,res)=>{
    try {
        let users = await Todo.find()
        res.status(200).send(users)
    } catch (error) {
        console.log(error);
        res.status(402).send(error)
    }
})

route.delete('/delete/:id',async(req,res)=>{

    const {id}  = req.params
    await Todo.findByIdAndDelete({_id:id})
    res.json(`${ id} is deleted`)

})


route.put('/update/:id',async(req,res)=>{
    const {id} = req.params

    await Todo.findByIdAndUpdate(id,req.body).then((result)=>
    res.status(200).json(result)
    )
    .catch(()=> res.status(401).json("error"))

})
export default route