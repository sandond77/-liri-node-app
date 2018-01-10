require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var action = process.argv[2];
var song = "The Sign Ace of Base";
var movie = "Mr. Nobody";

if (action === "my-tweets"){
	var params = {
		screen_name: 'sandond77', //can substitute with any screen name to see their tweets
		count: '20'
	};

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (error){
  		console.log('error:', error); // Print the error if one occurred
  		} else {	
		  	for (var i = 0; i < tweets.length; i++) {
		  			console.log("Tweet: " + tweets[i].text); //pulls the tweet
		  			console.log("Tweeter: @" + tweets[i].user.screen_name); //pulls the twitter handle
		  			console.log("Date Tweeted (GMT Time): " + tweets[i].created_at + "\n"); //pulls the date
	  		}
	  	}
	});
} else if (action==="spotify-this-song"){
	if (process.argv[3]) { //if there is a specific song name inputed, this will change search paramaters
		song = process.argv[3];
	}
	spotify.search({ type: 'track', query: song}, function(err, data) {
	  	if (err) {
		    return console.log('Error occurred: ' + err);
	 	} else {
	 		console.log("Song Artist: " + data.tracks.items[0].artists[0].name);
	 		console.log("Song Name: " + data.tracks.items[0].name);
	 		console.log("Song Preview: " + data.tracks.items[0].preview_url);
	 		console.log("Song Album: " + data.tracks.items[0].album.name);
	 	}
	})	
} else if (action==="movie-this"){
	if (process.argv[3]){
		movie = process.argv[3];
	}

	request('http://www.google.com', function (error, response, body) {
		if (error){
	  		console.log('error:', error); // Print the error if one occurred
	  	} else {
			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		  	console.log('body:', body); 
			};
	});	

// } else {
// 	}
}