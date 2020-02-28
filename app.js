const bodyParser = require("body-parser"),
      mongoose   = require("mongoose"),
      express    = require("express"),
      app        = express();
const url = 'mongodb://127.0.0.1:27017/restful_blog_app';
const port = 3000;
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
