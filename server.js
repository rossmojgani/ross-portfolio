const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/hello', (reqeust, response) => {
  response.send({ express: 'Hello from Express!'});
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
 
  console.log(`server is listening on port ${port}`)
})
