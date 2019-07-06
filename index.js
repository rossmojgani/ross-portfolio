const express = require('express')
const app = express()
const port = 48714

app.get('/', (reqeust, response) => {
  response.send('Hello from Express!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
 
  console.log(`server is listening on port ${port}`)
})
