module.exports = {
  "express": {
    "port": 3000
  },
  "twitter":  {
    "consumer_key": process.env.twitter_consumer_key,
    "consumer_secret": process.env.twitter_consumer_secret,
    "access_token_key": process.env.twitter_access_token_key,
    "access_token_secret": process.env.twitter_access_token_secret
  }
};
