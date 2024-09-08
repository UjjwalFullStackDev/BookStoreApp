import express from 'express';
import { getBook } from '../model/controller/book.controller.js';

const router=express.Router()

router.get('/',getBook)

export default  router;