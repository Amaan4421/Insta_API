const db = require("../models");
const config = require("../config/db.config");
const await = require("await");
const path = require("path");
const sequelize = db.sequelize;

const Image = db.image_model;
const User = db.user_model;


exports.upload = async function(req,res){

    const id = req.params.id;

    const getUser = await User.findOne({where: {id: id}});
    
    let data = {
        user_id: getUser.id,
        post_by: getUser.username,
    }

    const image = await Image.create(data);

    return  res.status(200).json({
        success: true,
        message: "Image posted successfully!!!",
        data: image,
      });
}


exports.allPost = async function(req,res){

    const id = req.params.id;

    const post = await Image.findAll({where: {user_id: id}});

    if(!post){
        res.status(404).json({
            status: false,
            message: "No Post found for this User!!!"
        });
    }
    else{
        res.status(200).json({
            status: true,
            message: "Post list!!!",
            data: post,
        })
    }
}

