console.log("hello world")

const form = document.querySelector('form');
const tweetElement = document.querySelector('.tweets');
const API_URL = "http://localhost:5000/tweets"


showTweets();
form.addEventListener('submit', (event)=> {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const tweet = formData.get('tweet');

  const finalTweet = {
    name,
    tweet
  };
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(finalTweet),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json()).then(createdTweet => {
    form.reset();
    showTweets();
  })
});


function showTweets(){
  tweetElement.innerHTML = '';
  fetch(API_URL)
  .then(response => response.json())
  .then(tweets => {
    tweets.reverse();
    tweets.forEach(tweet => {
      const div = document.createElement('div');

      const header = document.createElement('h3');
      header.textContent = tweet.name;

      const date = document.createElement('p');
      date.textContent = tweet.date;

      const contents = document.createElement('p');
      contents.textContent = tweet.tweet;


      div.appendChild(header);
      div.appendChild(contents);
      div.appendChild(date);

      tweetElement.appendChild(div);
    });

  });

};
