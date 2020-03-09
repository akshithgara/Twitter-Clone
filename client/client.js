console.log("hello world")

const form = document.querySelector('form');

form.addEventListener('submit', (event)=> {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const tweet = formData.get('tweet');

  const finalTweet = {
    name,
    tweet
  };
  console.log(finalTweet);
});
