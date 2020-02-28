const bodyParser = require("body-parser"),
      mongoose   = require("mongoose"),
      express    = require("express"),
      app        = express();
const url = 'mongodb://127.0.0.1:27017/restful_blog_app';
const port = 4000;
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
// title
// image
// body
// created



app.listen(port, function () {
    console.log("SERVER IS RUNNING!");
});