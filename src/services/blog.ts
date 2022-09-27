import blog from "../models/blog";
import mongoose from "mongoose";

export default class BlogServices{
    
    constructor(){
        

    }
    public saveBlog//sirve para guardar la clase
    public save = async () => {
        const newBlog = new blog({
            title:"test",
            author:"test",
        })
        await newBlog.save()
    }
    
}