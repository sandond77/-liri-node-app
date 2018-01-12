require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var action = process.argv[2];
var song = "The Sign Ace of Base";
var movie = "Mr. Nobody";
var handle = "sandond77";

liri(action,process.argv[3]);

function liri(action,search){
	if (action === "my-tweets"){
		if (search) { //if there is a specific handle is inputed, a different twitter will find it
			handle = search;
		}

		var params = {
			screen_name: handle, //can substitute with any screen name to see their tweets
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
		if (search) { //if there is a specific song name inputed, this will change search paramaters
			song = search;
		}
		spotify.search({ type: 'track', query: song}, function(err, data) {
		  	if (err) {
			    return console.log('Error occurred: ' + err);
		 	} else {
		 		console.log("Song Artist: " + data.tracks.items[0].artists[0].name);
		 		console.log("Song Name: " + data.tracks.items[0].name);
		 		console.log("Song Preview: " + data.tracks.items[0].preview_url);
		 		console.log("Song Album: " + data.tracks.items[0].album.name + '\n');
		 	}
		})	
	} else if (action==="movie-this"){
		if (search){
			movie = search;
		}

		request('http://www.omdbapi.com/?apikey=449c886e&t=' + movie + '&plot=full', function (error, response, body) {
			if (error){
		  		console.log('error:', error); // Print the error if one occurred
		  	} else {
		  		body = JSON.parse(body);
			  	console.log("Movie Title: " + body.Title); 
			  	console.log("Release Year: " + body.Released); 
			  	console.log("IMDB Rating: " + body.imdbRating); 
			  	console.log("Rotten Tomatoes Rating: " + body.Ratings[1].Value); 
			  	console.log("Country of Production: " + body.Country); 
			  	console.log("Language: " + body.Language); 
			  	console.log("Plot: " + body.Plot); 
			  	console.log("Actors: " + body.Actors + '\n'); 
			};
		});	

	} else if (action==="do-what-it-says"){
		fs.readFile("random.txt","utf8", function(error,data){
			if (error){
			console.log("Error reading file: ", error)
			} else {
				var dataArray = data.split(',');
				liri(dataArray[0],dataArray[1]);
			}
		})
	}
}