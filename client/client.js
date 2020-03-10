console.log("hello world")

const form = document.querySelector('form');
const API_URL = "http://localhost:5000/tweet"


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
    console.log(createdTweet);
  })

});
