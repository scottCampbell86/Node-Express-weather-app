const request = require('request')

const forecast = (lat, lon, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=c2cb26c7e5a77c08bb51971d4efc236d&query=${lat}, ${lon}&units=f`

  request({url: url, json: true}, (error, { body }) => { 
    if(error) {
      callback('Unable to connect', undefined)
    } else if (body.error) {
      callback('Cannot find local weather', undefined)
    } else {
      callback(undefined, `In ${body.location.name}, ${body.location.region}  it is ${body.current.temperature} degrees and ${body.current.weather_descriptions}`)
    }
  })
}

module.exports = forecast