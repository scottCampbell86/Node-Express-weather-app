//not just defining a const, but this is declaring a function with the label express, this loads express into our app, giving us access to the express function
const express = require('express')

//declaring a const with the label app and assigning it to the invocation of the express function
const app = express()

//below we invoke the get method on the express function
app.get('/', function(req, res){
  //param one: this is setting the endpoint of our get request
  //param two: a callback that takes two params, giving instructions for what to do with the get request -- what to send back to client
    //1. req: is an object containing information about the incoming request being sent to server from the client
    //. res: is an object that cotains a host of methods allowing us to customize what we are going to send back to the client
  res.send('Hello express')
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})