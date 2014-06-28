var express = require('express'); // bring in the the express api
var fs = require('fs'); // bring in the file system api
var mustache = require('mustache'); // bring in mustache template engine
var app = express(); // create the http server w/express

app.use('/css',express.static(__dirname +'/css'));
app.use('/js',express.static(__dirname +'/js'));
app.use('/images',express.static(__dirname +'/images'));
app.use('/img',express.static(__dirname +'/img'));


var ProfileData = {
"FirstName":"Manish",
"LastName":"Agarwal"
 };


app.get('/:slug', function(req, res){ // get the url and slug info
var slug =[req.params.slug][0]; // grab the page slug
var rData = {records:ProfileData }; // wrap the data in a global object... (mustache starts from an object then parses)
var page = fs.readFileSync(slug, "utf8"); // bring in the HTML file

console.log(slug);

var html = mustache.to_html(page, ProfileData )// replace all of the data
res.send(html); // send to client
});
app.listen(3000);// start the server listening
console.log('Server running at http://127.0.0.1:3000/'); // server start up message