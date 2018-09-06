const fetch = require("node-fetch");

module.exports = {
  geocodeAddress(address, callback) {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`
    )
      .then(data => data.json())
      .then(json => {
        if (json.status !== "OK") throw json.status;

        callback(undefined, {
          address: json.results[0].formatted_address,
          lat: json.results[0].geometry.location.lat,
          lng: json.results[0].geometry.location.lng
        });
      })
      .catch(error => callback(`Error: ${error}`));
  }
};
