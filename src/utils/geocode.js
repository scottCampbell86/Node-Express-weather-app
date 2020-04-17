const request = require('request')

const geocode = (address, callback) => {
  const geoURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(`${address}`) + '.json?access_token=pk.eyJ1Ijoic2NvdHR5d2V5bW91dGgiLCJhIjoiY2s4eHVkaDU0MGRzcTNsbnJ5OGc2Mzd5eCJ9.XaLcOGy-E-2K7SWHsEyuVg&limit=1'

  request({ url: geoURL, json: true }, (error, response) => {
    if (error) {
      callback('ERROR', undefined)
    } else if (response.body.features.length === 0) {
      callback('ERROR', undefined)
    } else {
      callback (undefined, {
        lat: response.body.features[0].center[1],
        lon: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      })
    }
  })
}

module.exports = geocode

