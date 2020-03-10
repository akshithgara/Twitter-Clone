const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (req,res) => {
  res.json({
    message: 'Tweet response!'
  })
});

function isValidTweet(tweet) {
  if (tweet.name && tweet.name.toString().trim() != ''
      && tweet.tweet && tweet.tweet.toString().trim() != ''){
        return true;
      }
      else{
        return false;
      }
}



app.post('/tweet', (req,res)=> {
    if (isValidTweet(req.body)) {
      const tweet = {
        name: req.body.name.toString(),
        tweet: req.body.tweet.toString()
      };
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
