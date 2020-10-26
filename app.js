const request = require('request');

const url = 'https://api.weatherstack.com/current?access_key=c2cb26c7e5a77c08bb51971d4efc236d&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (err, res) => {
  let currTemp = res.body.current.temperature;

  console.log(`The current Temperature is: ${currTemp} degrees`);
});

