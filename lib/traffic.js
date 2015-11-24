var Twitter = require('twitter');
var config = require('./../config');
var _ = require('lodash');
var moment = require('moment');
var hash = require("hashtags");

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
      });
      
    callback(null, results)
  });
}

function getLocation(text) {
  return  _.map(hash(text), function(item) { return item.replace("#", ''); }).join(', ');
}

function getDescription(text) {
  return text;
}

function getTimestamp(timestamp) {
  return moment(timestamp, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en');
}