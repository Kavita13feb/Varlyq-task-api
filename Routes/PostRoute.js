const express = require('express');
const postsRouter = express.Router();
const { getPostsController } = require('../Controllers/getPostsController');
const { AddPostController } = require('../Controllers/AddPostController');
const { authenticateToken } = require('../Middlewares/authenticator');

postsRouter.post('/', AddPostController);
postsRouter.use(authenticateToken)
postsRouter.get('/', getPostsController);




module.exports = {postsRouter};
