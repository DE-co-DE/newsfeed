var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');
let Parser = require('rss-parser');
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
let parser = new Parser();
app.get('/posts', function(req, res) {

    console.log("posts!");
    (async () => {

        let feed = await parser.parseURL('https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en');
      //  console.log(feed);
      
        // Logging the output within the request function
        res.json(feed) 
        // feed.items.forEach(item => {
        //   console.log(item.title + ':' + item.link)
        // });
      
      })();
     
});

app.listen(process.env.PORT || 8082);