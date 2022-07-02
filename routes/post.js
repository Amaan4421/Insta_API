const post_controller = require("../controllers/post");
const path = require("path");
const router = require('express').Router();

router.post("/:pid/like/:uid",post_controller.postLiked);
router.delete("/:pid/dislike",post_controller.postDisliked);

module.exports = router


