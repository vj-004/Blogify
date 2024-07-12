import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            default: 'https://www.monsterinsights.com/wp-content/uploads/2020/01/what-is-the-best-time-to-post-a-blog-and-how-to-test-it.jpg',


        },
        category: {
            type: String,
            default: 'uncategorized',
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },

    }, {timestamps:true}
);

const Post = mongoose.model('Post',postSchema);

export default Post;

