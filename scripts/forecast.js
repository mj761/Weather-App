const key = 'sNWOATrhImVTb8EgsIpeEk6WPcvfPviz';

// get weather conditions
const getWeather = async (id) => {

    const base = '//dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

// get city information 
const getCity = async (city) => {

    const base = '//dataservice.accuweather.com/locations/v1/cities/search';

    // using `` tags - are template strings

    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};
// See all the information on new york in the console log 
//getCity('new york').then(data => {
//  return getWeather(data.Key);
//}).then(data => {
//    console.log(data);
//
//}).catch(err => console.log(err));

//getWeather('349727');