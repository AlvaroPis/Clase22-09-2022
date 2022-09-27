import userModel from "../models/blog"

const userController = {
    get: async (req, res) => {
        try {
            const allUsers = await userModel.find()
            res.status(200).send(allUsers)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const  myUser = new userModel({...req.body})
            /*myUser.name = req.body.name,
            myUser.email = req.body.email,
            myUser.age = req.body.age,*/
            await myUser.save()
            res.send("ok")
        } catch (error) {
            res.status(500).send(error)
            
        }
        
    },
    delete: async (req, res) => {
        try {
            const id = req.params._id
            const user = await userModel.findByIdAndDelete({_id: id})
            res.status(200).send(user)
            /*const deleteUser = new userModel()
            deleteUser.deleteOne({...req.body})
            await deleteUser.save()
            res.send("ok")*/
        } catch (error) {
            res.status(200).send(error)
            
        }
    },
    edit: async (req, res) => {
        try {
            const id = req.params._id
            const user = await userModel.findByIdAndUpdate({_id: id},{...req.body})
            res.status(200).send(user)
        } catch (error) {
            res.status(200).send(error)
        }
    }
}
export default userController