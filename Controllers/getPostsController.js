// routes/posts.js


const { PostModel } = require('../Models/PostsModel');
const { authenticateToken } = require('../auth'); 


const getPostsController= async (req, res) => {
  try {
    
    const posts = await PostModel.find().populate('createdBy', 'name');

    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {getPostsController};
