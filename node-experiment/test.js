var filesYo = require('fs');
filesYo.writeFile(__dirname + "/index.html","<h1>html rocks</h1>");
var https = require('https');
var lionUrl = "https://images.unsplash.com/photo-1469094937692-2b03c58004e8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=426e6f0684062e533d6555a90a2a59b8";

var lionFile = filesYo.createWriteStream(__dirname + "/node-lion.jpg");

var request = https.get(lionUrl, function(response) {
	
response.pipe(lionFile);}
	);
	
	