import {Router} from 'express';
import blogRouter from "./blog"
import userController from '../src/controllers/user';

const router = Router();
router.get("/", userController.get)
router.post("/", userController.add)
router.delete("/:id",userController.delete)
router.put("/:id",userController.edit)


//router.use("/blog",blogRouter);
//"localhost:3000/api/blog/12356"

export default router;
