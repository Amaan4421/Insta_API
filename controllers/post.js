const db = require("../models");
const config = require("../config/db.config");
const await = require("await");
const path = require("path");
const sequelize = db.sequelize;

const Post = db.post_model;
const Image = db.image_model;
const User = db.user_model;


exports.postLiked = async function(req,res){

    const pid = req.params.pid;
    const uid = req.params.uid;

    const getPost = await Image.findOne({where: {id: pid}});
    const getUser = await User.findOne({where: {id: uid}});

    let data = {
        post_id: getPost.id,
        post_of: getPost.post_by,
        liked_by: getUser.username,
    }

    const post = await Post.create(data);

    res.status(200).json({
        status: true,
        message: "Post liked!!!",
        data: post,
    });
};


exports.postDisliked = async function(req,res){

    const pid = req.params.pid;
    const post = await Post.destroy({where: {id: pid}});
    
    if(post)
    {
        res.status(200).json({
            status: true,
            message: "Post Disliked!!!",
        });
    }
    else
    {
        res.status(200).json({
            status: false,
            message: "No post found!!!",
        });
    }
};




