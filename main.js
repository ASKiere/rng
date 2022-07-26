const express = require('express')
const app = express()
const port = 6942

app.get('/', (req, res) => {
    let m = 100
    let o = 1
    let j = Math.random(o, m)
    res.send(`Random number was ${j}!`)
    if (j === 1) {
        res.send('WOW! You got 1! Thats a 0.0000000000000001% chance!')
    }
    if (j === 69) {
        res.send('hahahaha funny')
    }
  })
  
  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
