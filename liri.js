require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var action = process.argv[2]
var song = process.argv[3];

if (action === "my-tweets"){
	var params = {
		screen_name: 'sandond77', //can substitute with any screen name to see their tweets
		count: '20'
	};

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  	if (!error) {
	  		for (var i = 0; i < tweets.length; i++) {
	  			console.log("Tweet: " + tweets[i].text); //pulls the tweet
	  			console.log("Tweeter: @" + tweets[i].user.screen_name); //pulls the twitter handle
	  			console.log("Date Tweeted (GMT Time): " + tweets[i].created_at + "\n"); //pulls the date
	  		}
	  	}
	});
} else if (action==="spotify-this-song"){
	if (song !== ""){
		spotify.search({ type: 'track', query: song}, function(err, data) {
		  	if (err) {
			    return console.log('Error occurred: ' + err);
		 	} else {
		 		// var short = data.tracks.items[0].artists

		 		// for (var key in short[key]){
		 		// 	console.log(short[key]);
		 		// 	console.log(short.length);
		 		// }

		 		console.log(data.tracks.items[0])

		 		console.log("Song Artist: " + data.tracks.items[i]);
		 		console.log("Song Artist: " + JSON.stringify(data.tracks.items[0].artists));
		 		console.log("Song Artist: " + data.tracks.items[0].artists[0].name);

		 		console.log("Song Name: " + data.tracks.items[0].name);
		 		console.log("Song Preview: " + data.tracks.items[0].preview_url);
		 		console.log("Song Album: " + data.tracks.items[0].album.name);
		 	}
		})
	// } else {
	// 	spotify.search({ type: 'track', query: ""}, function(err, data) {
	// 	  	if (err) {
	// 		    return console.log('Error occurred: ' + err);
	// 	 	} else {
	// 	 		// var short = data.tracks.items[0].artists

	// 	 		// for (var key in short[key]){
	// 	 		// 	console.log(short[key]);
	// 	 		// 	console.log(short.length);
	// 	 		// }

	// 	 		console.log(data.tracks.items[0])

	// 	 		console.log("Song Artist: " + data.tracks.items[i]);
	// 	 		console.log("Song Artist: " + JSON.stringify(data.tracks.items[0].artists));
	// 	 		console.log("Song Artist: " + data.tracks.items[0].artists[0].name);

	// 	 		console.log("Song Name: " + data.tracks.items[0].name);
	// 	 		console.log("Song Preview: " + data.tracks.items[0].preview_url);
	// 	 		console.log("Song Album: " + data.tracks.items[0].album.name);
	// 	 	}
	// 	})
	// }
}