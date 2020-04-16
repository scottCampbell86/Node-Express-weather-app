const path = require('path')
//not just defining a const, but this is declaring a function with the label express, this loads express into our app, giving us access to the express function
const express = require('express')
//declaring a const with the label app and assigning it to the invocation of the express function
const app = express()
//define paths for express config
const viewsPath = path.join(__dirname, '../templates/views')
const publicDirectoryPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../templates/partials')
//set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
//set up static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    text: 'This is the help message'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Scott Campbell'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Stormy',
    location: 'Portland'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})