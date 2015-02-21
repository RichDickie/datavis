var Twit = require('twit');
var fs = require('fs');
var twit = new Twit({
	consumer_key : 'CFw3eUMFAYRCNqINwlHfGNGmn',
	consumer_secret : 'g2ONhePwW9Zjvm8klH0c2PRMStBdhkxBK4Dhkadp8VmRRj0rr2',
	access_token : '487345415-4U3hwck2XXynD92HGxYMgtjgomMj6XjMzKQnUyYo',
	access_token_secret : 'GpPCMFrQmXwPBvjMPlyiKswuhDqyP5uNzJ0N86vSFGS5g'
});

var uk = [ '-9.23', '49.84', '2.69', '60.85' ];
var stream = twit.stream('statuses/filter', { locations: uk })
var log = fs.createWriteStream('tweets.logs');

stream.on('tweet', processTweet);
function processTweet(tweet) {
    var strTweet = JSON.stringify(tweet);
    log.write(strTweet+"\n");

};