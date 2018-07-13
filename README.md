# Liri 

### What is Liri?
Liri is a node.js based command line application that functions similar to Apple's Siri AI. It allows the user to call on the Twitter, Spotify, and OMDB APIs for information. See the sections below for information about using these functions.


#### Special Note: For the protect of my own API access tokens/keys, the user must supply their own Spotify and Twitter access tokens/keys to use this application. Access tokens/keys can be created by creating accounts for the Spotify and Twitter dev websites. The user must create and .env file and fill out the information in the formatting below:

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
Users can call on the Twitter function to see recent tweets by a user with the following command:
```
node liri.js twitter("username")
```

If no username is specified,
```
node liri.js twitter
```
the application will return tweets from a default username.

### Spotify

### OMDB

