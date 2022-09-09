// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

L.circle([34.0522, -118.2437], {
    radius: 100
 }).addTo(map);

 L.circleMarker([34.0522, -118.2437]).addTo(map);
//OR
// Create the map object with a center and zoom level.
//let map = L.map("mapid", {
//    center: [
//      40.7, -94.5
//    ],
//    zoom: 4
//  });

// We create the tile layer that will be the background of our map.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}'
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
});

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);
//For multiple points, replace the marker variable (which we used to map one location) with the cities variable that references the five most populous cities array in the following code block
// An array containing each city's location, state, and population.
let cities = [{
    location: [40.7128, -74.0059],
    city: "New York City",
    state: "NY",
    population: 8398748
  },
  {
    location: [41.8781, -87.6298],
    city: "Chicago",
    state: "IL",
    population: 2705994
  },
  {
    location: [29.7604, -95.3698],
    city: "Houston",
    state: "TX",
    population: 2325502
  },
  {
    location: [34.0522, -118.2437],
    city: "Los Angeles",
    state: "CA",
    population: 3990456
  },
  {
    location: [33.4484, -112.0740],
    city: "Phoenix",
    state: "AZ",
    population: 1660272
  }
  ];

//Below the cities array, add the following code to iterate through the array. Inside the brackets, use the console.log() function to print each object in the array to the console:
  // Loop through the cities array and create one marker for each city.
//cities.forEach(function(city) {
//    console.log(city)
//});

//In the forEach() function, assign the city variable to each object of the cities.js file. Then, get the coordinates of each city by adding city.location in the L.marker() function. We can then add each location to the map with the addTo() function and pass themap object as the argument.
// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
    console.log(city)
    L.marker(city.location).addTo(map);
});
//We created a new js file (cities.js) that will make it easier to connect it with cities. We can earase the info above
// Loop through the cities array and create one marker for each city.
// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

//To prevent any errors make sure you add the following script code to the index.html file that references cities.js code
//<script type="text/javascript" src="static/js/cities.js"></script>

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);