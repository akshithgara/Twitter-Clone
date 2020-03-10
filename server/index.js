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

app.post('/tweet', (req,res)=> {
    console.log(req.body);
});

app.listen(5000, () =>{
  console.log('Listening on http://localhost:5000')
})