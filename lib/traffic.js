var Twitter = require('twitter');
var config = require('./../config');
var _ = require('lodash');
var moment = require('moment');

module.exports = {
  getTweets: getTweets
}

function getTweets(callback) {
  var client = new Twitter(config.twitter);
  var params = {screen_name: 'LiveTrafficSyd'};
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if(error) {
      return callback(error, null)
    }

    var results = _.chain(tweets)
      .map(tweet => {
        return {
          description: getDescription(tweet.text),
          location: getLocation(tweet.text),
          timestamp: getTimestamp(tweet.created_at)
        };
      })
      .filter(x => {
        return x.location.toLowerCase() === 'baulkham hills' ||
        x.location.toLowerCase() === 'lanecovetunnel';
      });

    callback(null, results)
  });
}

function getLocation(text) {
  var colonIndex = text.indexOf(':');
  return text.substring(0, colonIndex).replace('#', '');
}

function getDescription(text) {
  var colonIndex = text.indexOf(':');
  return text.substring(colonIndex + 1, text.length - 1);
}

function getTimestamp(timestamp) {
  return moment(timestamp, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en');
}