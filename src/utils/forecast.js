const request = require('request')



const forecast = (longitude, latitude, callback) => {
    url = 'https://api.darksky.net/forecast/296d89b54641b747cbc795319bcb3ba3/'+ latitude + ',' + longitude

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain. The high for today is ' + body.daily.data[0].temperatureMax + ' degrees with a low of ' + body.daily.data[0].temperatureMin + ' degrees.')
        }
    })
}

module.exports = forecast