import { blog } from "../models/blog";

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