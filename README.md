# Liri 

## What is Liri?
Liri is a node.js based command line application that functions similar to Apple's Siri AI. It allows the user to call on the Twitter, Spotify, and OMDB APIs for information. See the sections below for information about using these functions.


##### Note: For the protect of my own API access tokens/keys, the user must supply their own Spotify and Twitter access tokens/keys to use this application. Access tokens/keys can be created by creating accounts for the Spotify and Twitter dev websites. The user must create a .env file and fill out the information in the formatting below:

```
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

# Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret
```


### Twitter 
Users can call on the Twitter function and insert a username into the argument to see recent tweets by a user with the following command:
```
node liri.js twitter "username"
```

If no username is specified, the application will return tweets from a default username.
```
node liri.js twitter
```

### Spotify
Users can call on the Spotify function and insert a song name into the argument to find information about a song with the following command:
```
node liri.js spotify-this-song "songname"
```

If no song name is specified, the application will search up the song "The Sign Ace of Base" by default.
``` 
node liri.js spotify-this-song
```

### OMDB
Users can call on the OMDB function to look up information about a movie (the release year, IMDB rating, rotten tomatoes rating, origin country, language, plot, and actors) and insert a movie name in the argument with the following command:
```
node liri.js movie-this "movie"
```

If no movie name is specified, the application will search up the movie "Mr. Nobody" by default.
```
node liri.js movie-this
```

#### Do What It Says
The Do what it says command will randomly choose a function that you've already called upon. It can be called with the following command:
```
node liri.js do-what-it-says
```


#### Data Output
All of the data from these commands are logged in the included "log.txt" file.