const mongoose = require('mongoose');

// Defineing the Posts Schema
const postSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  message: {
    type: String,
    required: true,
  },
  comments: [{
    sentBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
      required: true,
    },
    sentAt: {
      type: Date,
      default: Date.now,
    },
    liked: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
      },
    ],
  }], 
});

// Creating the Post model
const PostModel = mongoose.model('Post', postSchema);

module.exports = {PostModel};
