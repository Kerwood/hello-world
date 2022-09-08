const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(morgan('combined'))

const message = process.env.MESSAGE || 'Hello World'

app.get('/', function (req, res) {
  res.send(`<br><br><center><pre><h1>${message}</h1></pre></center>`)
})

console.log('Hello World application has started on port 3000')
console.log('Powered by a bunch of small penguins...')
app.listen(3000)
