var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'homepage.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/Aboutme.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Aboutme.html'));
});

app.get('/ui/login.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
   counter = counter + 1;
   res.send(counter.toString());
});

app.get('/ui/destiny.jpg', function (req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'destiny.jpg'));
});

app.get('/ui/destiny1.jpg', function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'destiny1.jpg'));
});


app.get('/ui/blackpic.png', function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'blackpic.png'));
});

app.get('/ui/facebook_logo.png', function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'facebook_logo.png'));
});

app.get('/ui/linkedin_logo.png', function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'linkedin_logo.png'));
});

app.get('/ui/youtube_logo.png', function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'youtube_logo.png'));
});


app.get('/ui/googleplus_logo.png', function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'googleplus_logo.png'));
});

app.get('/ui/slideshare_logo.png', function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'slideshare_logo.png'));
});

app.get('/ui/twitter_logo.png', function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'twitter_logo.png'));
});


app.get('/ui/main.js',  function (req,res)  {
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var names=[];
app.get('/submit-name:name',function(req,res){
    var name=req.params.name;
    
    names.push(name);
    //converting array into string through json
    
    res.send(JSON.stringify(names));
    //json javascript object notation
    
}
)


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
