const fetch = require("node-fetch");

module.exports = {
  getWeather({ lat, lng, address }, callback) {
    fetch(
      `https://api.darksky.net/forecast/8b15d53728a9131287168e070f7816f6/${lat},${lng}?units=si`
    )
      .then(data => data.json())
      .then(json => {
        debugger;
        callback(undefined, `It's ${json.currently.temperature} degrees at ${address}`);
      })
      .catch(error => callback(error));
  }
};
