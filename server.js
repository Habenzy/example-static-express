const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 5000

app.use(express.static('./public'))

//Get all user IDs as json
app.get("/users", (req, res) => {
  res.sendFile(path.resolve('./api/users.json'))
})

//Get individual user by ID as JSON
app.get("/users/:id", (req, res) => {
  console.log(req.params.id)
  res.sendFile(path.resolve(`./api/${req.params.id}.json`))
})

//Serves front end user profile page
app.get("/:user", (req, res) => {
  res.sendFile(path.resolve('./public/profile.html'))
})

app.listen(port, () => {
  console.log('server running on port', port)
})