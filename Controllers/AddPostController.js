const { PostModel } = require("../Models/PostsModel");

const AddPostController=async (req, res) => {
    try {
      // Createing a new post using the Post model
      const newPost = new PostModel(req.body);
      await newPost.save();
  
      res.status(201).send(newPost);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Server error' });
    }
  }

  module.exports={
    AddPostController
  }