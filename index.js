const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.port || 3000;

app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const users_routes = require("./routes/users");
const post_routes = require("./routes/post");
const image_routes = require("./routes/image");

const { db } = require("./config/db.config");

app.use("/user", users_routes);
app.use("/post",post_routes);
app.use("/image",image_routes);


app.get("/", (req, res) => {
    res.json({ message: "Welcome to Instagram!!!" }); 
});

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});
  
