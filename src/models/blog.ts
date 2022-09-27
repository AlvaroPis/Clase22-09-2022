import mongoose, { Schema } from 'mongoose';

const blogSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  /*body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }*/
});

const userSchema = new mongoose.Schema({
  name: {type: String, require: true},
  email: {type: String, require: true},
  age: {type: Number, require: true},
})

const userModel = mongoose.model("User",userSchema)
const blog = mongoose.model("blog",blogSchema)

export default userModel
