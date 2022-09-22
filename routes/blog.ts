import {Router} from 'express';
import BlogServices from '../src/services/blog';
const router = Router();

//router.get("/:id/test/:nuevo",(req,res)=>{
router.get("/:id",(req,res)=>{
    const blogId = req.params.id;
    //const newparams = req.params.nuevo
    const blogServices = new BlogServices();
    blogServices.save();
    res.send(blogId);
    //console.log(newparams)
})


export default router;