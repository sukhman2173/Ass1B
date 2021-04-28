import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    author: String,
    year: String,
    sepractice: String,
    claim: String,
    evidencestrength: String,
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;