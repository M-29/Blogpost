import express from "express";
import multer from "multer";
import {getAllUser ,getMe, register, login} from '../controllers/user-controller.js';
import {  allCategories, blogs, categories, getAllBlogs,  particularBlog,  postRelatedComments,  relatedCategories, reviews,  search,  userRelatedBlogs } from "../controllers/blog-controller.js";

import authMiddleware from '../middleware/auth.js';
import { foundersData, metaInfo } from "../controllers/metaInfo-controller.js";
import { queries, queryInfo } from "../controllers/contact-controller.js";


const route =express.Router();
const storage =multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads');
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname);
    }
})
const upload = multer({storage:storage}).array('image', 10);;
route.post('/register',register);
route.get('/allUser',getAllUser);
route.post('/login',login);
route.post('/userget',authMiddleware,getMe);
route.post('/category',categories);
route.post('/blogPost',authMiddleware,upload,blogs);
route.get('/blogs',authMiddleware,getAllBlogs);
route.get('/blog/:id',authMiddleware,particularBlog);
route.get('/blogs/:id',authMiddleware,userRelatedBlogs);
route.post('/comment',authMiddleware,reviews);
route.get('/comments/:id',authMiddleware,postRelatedComments);
route.post('/metaData',metaInfo);
route.post('/founders',upload,foundersData);
route.get('/allCategories',allCategories);
route.get('/categories',authMiddleware,relatedCategories);
route.post('/query',authMiddleware,queryInfo);
route.get('/query',authMiddleware,queries);
route.get('/search',authMiddleware,search);
export default route;