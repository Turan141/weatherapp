export let getData = async () =>
  fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=b7fdc84e53464a29be991339222001&q=Baku&days=6&aqi=no&alerts=no"
  ).then((response) => response.json() );

export default getData;
