const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b1185396b070e50d9f783714036c7ebb&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}
// const url = 'http://api.weatherstack.com/current?access_key=b1185396b070e50d9f783714036c7ebb&query=37.8267,-122.4233&units=f'


module.exports = forecast