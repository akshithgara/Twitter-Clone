const express = require('express');
const cors = require('cors');
const app = express();
const monk = require('monk');


const db = monk('localhost/twitter');
const tweets = db.get('tweets');

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
  res.json({
    message: 'Tweet response!'
  })
});

app.get('/tweets', (req,res) => {
  tweets.find().then(tweets => {
    res.json(tweets);
  })
})


function isValidTweet(tweet) {
  if (tweet.name && tweet.name.toString().trim() != ''
      && tweet.tweet && tweet.tweet.toString().trim() != ''){
        return true;
      }
      else{
        return false;
      }
}



app.post('/tweets', (req,res)=> {
    if (isValidTweet(req.body)) {
      const tweet = {
        name: req.body.name.toString(),
        tweet: req.body.tweet.toString(),
        date: new Date()
      };

      tweets.insert(tweet).then(createdTweet => {
        res.json(createdTweet);
      });
      console.log(tweet)
    } else{
      res.status(422);
      res.json({
        message: 'How hard is tweeting a legit tweet? 😂'
      });
      console.log('How hard is tweeting a legit tweet? 😂')
    }
});

app.listen(5000, () =>{
  console.log('Listening on http://localhost:5000')
})
