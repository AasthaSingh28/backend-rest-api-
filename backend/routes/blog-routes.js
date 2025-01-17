import express from "express";
import { addBlog, blogUpdate, deleteBlog, getAllBlogs, getById } from "../controllers/blog-controller";
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post ("/add", addBlog);
blogRouter.put("/update/:id", blogUpdate);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);

export default blogRouter;
