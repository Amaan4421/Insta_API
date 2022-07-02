const db = require("../models");
const config = require("../config/db.config");
const await = require("await");
const path = require("path");
var jwt = require("jsonwebtoken");
const sequelize = db.sequelize;

const User = db.user_model;

exports.createUser = async function (req, res) {

    let data = {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        mobileno: Number(req.body.mobileno),
        email: req.body.email,
        password: req.body.password,
    }
    
    const user = await User.create(data);

    res.status(200).json({
        status : true,
        message: "Account Created!!!",
        data: user,
    });
  
};


exports.login = async (req,res) => {

    User.findOne({
        where: {
          username: req.body.username
        }
      })
      .then(user => {
        if (!user) {
          return res.status(404).json({
            success: false,
            message: "User not found...Enter Valid username!!!"
          });
        }

        if (user.password != req.body.password) {
          return res.status(401).json({
            success: false,
            message: "Invalid Password!"
          });
        }
  
        var token = jwt.sign({
          id: user.id
        }, config.secret, {
          expiresIn: 86400 // 24 hours
        });
  
        res.status(200).json({
          success: true,
          data: {
            user: {
              username: user.username,
              Fullname: user.firstname + " " + user.lastname,
              email : user.email,
              mobileno : user.mobileno,
              id: user.id
            },
            token: token
          },
          message: "Login Successfully!!!"
        });
      })
} 


exports.updatePassword = async function(req,res){

    const id = req.params.id;
    User.findOne({
        where :
        {
            id: id
        }
    })
    .then(user =>{
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found!!!"
            });
        }

        data = {
            password : req.body.password
        }

        const password_update = User.update(req.body, {where: {id: id}})

        res.status(200).json({
            success:true,
            message: "Password Updated Successfully!!",
            data: data,
        });
    })
}


exports.updateProfile = async function(req,res){
  
    const id = req.params.id;

    const user = await User.update(req.body, {where: {id: id}});
    const getuser = await User.findOne({where: {id: id}});

    if(!getuser) {
        res.status(200).json({
            status : false,
            message: "No Data Found.",
            data: user,
        });
    }

    data = {
      id: getuser.id,
      username: getuser.username,
      fisrtname: getuser.firstname,
      lastname: getuser.lastname,
      email : getuser.email,
      mobileno : getuser.mobileno,
    }

    res.status(200).json({
        status : true,
        message: "User Updated Successfully",
        data: data,
    });
}


exports.getUsers = async function(req,res){

  const user = await User.findAll();

  if(!user)
  {
    res.status(200).json({
      status: false,
      message: "Users are not found!!!"
    });
  }
  else
  {
    res.status(200).json({
      status: true,
      message: "Users list!!!",
      data: user,
    });
  }
}


exports.delete = async function(req,res){

  const id = req.params.id;
  
  const user = await User.destroy({where: {id: id}});

  if(!user)
  {
    res.status(200).json({
      status: false,
      message: "User not found!!!"
    });
  }
  else{
    res.status(200).json({
      status: true,
      message: "User Deleted Successfully!!!"
    });
  }
}
