const request = require('request');

  //QUERY is lat and lon
const wsURL = 'https://api.weatherstack.com/current?access_key=c2cb26c7e5a77c08bb51971d4efc236d&query=37.8267,-122.4233&units=f';
  //PROXIMITY is lat and lon
const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic2NvdHR5d2V5bW91dGgiLCJhIjoiY2s4eHVkaDU0MGRzcTNsbnJ5OGc2Mzd5eCJ9.XaLcOGy-E-2K7SWHsEyuVg&limit=1'

request({ url: wsURL, json: true }, (err, res) => {
  if (err) {
    console.log('unable to connect to weather service')
    return;
  } 
  
  let currTemp = res.body.current.temperature;
  let currDescription = res.body.current.weather_descriptions;

  console.log(`The current Temperature is: ${currTemp} degrees`);
  console.log(`${currDescription}`);
});

request({ url: geoURL, json: true }, (err, res) => {
  if (err) {
    console.log('unable to find location')
    return;
  }

  const lat = res.body.features[0].center[1];
  const lon = res.body.features[0].center[0];

  console.log(lat,lon);
})