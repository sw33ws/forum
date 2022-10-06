const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100,
    },
    message: {
        type: String,
        required: true,
        maxlength: 500,
    }
})

const Post = model('Post', postSchema);

module.exports = Post;