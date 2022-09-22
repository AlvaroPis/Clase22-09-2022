import {Router} from 'express';
import blogRouter from "./blog"

const router = Router();
router.use("/blog",blogRouter);
"localhost:3000/api/blog/12356"

export default router;