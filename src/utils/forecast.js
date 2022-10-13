const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=' + latitude + '&lon=' + longitude + '&key=3cb8a9f9bbe249fe9fe20fee3397b210'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.data[0].weather.description)
        }
    })
}

module.exports = forecast