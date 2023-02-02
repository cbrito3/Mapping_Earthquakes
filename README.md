# Mapping_Earthquakes

# Deliverables for Module 13 - Earthquake_Challenge repository:

# Background

Basil and Sadhana would like to see the earthquake data in relation to the tectonic plates’ location on the earth, and they would like to see all the earthquakes with a magnitude greater than 4.5 on the map, and they would like to see the data on a third map.

## Deliverables
* Deliverable 1: Add Tectonic Plate Data
* Deliverable 2: Add Major Earthquake Data
* Deliverable 3: Add an Additional Map

# Deliverable 1: Add Tectonic Plate Data 
* The tectonic plate data is added as a second layer group 
* The tectonic plate data is added to the overlay object 
* The d3.json() callback is working and does the following: 
  - The tectonic plate data is passed to the geoJSON() layer
  - The geoJSON() layer adds color and width to the tectonic plate lines
  - The tectonic layer group variable is added to the map
  - The earthquake data and tectonic plate data displayed on the map when the page loads

* Background: For this map we added tectonic plate data using d3json(), data using the geoJSON() layer, and then sat the tectonic plate LineString data to stand out on the map. Additionally, we added the tectonic plate data to overlay object with the earthquake data. The image below shows the result:

![Deliverable%201](https://github.com/cbrito3/Mapping_Earthquakes/blob/Earthquake_Challenge/Earthquake_Challenge/Deliverable%201.png)

# Deliverable 2: Add Major Earthquake Data
* The major earthquake data is added as a third layer group 
* The major earthquake data is added to the overlay object 
* The d3.json() callback is working and does the following: 
  - Sets the color and diameter of each earthquake.
  - The major earthquake data is passed to the geoJSON() layer.
* The geoJSON() layer creates a circle for each major earthquake, and adds a popup for each circle to display the magnitude and location of the earthquake
* The major earthquake layer group variable is added to the map
* All the earthquake data and tectonic plate data are displayed on the map when the page loads and the datasets can be toggled on or off

* Background: For this map we used our knowledge of JavaScript, Leaflet.js, and geoJSON data. We added major earthquake data to the map using d3.json(), color and the radious of the circle markers were added based on the magnitude of the earthquake and popup marker for each earthquake to display the magnitude and location of the earthquake using the GeoJSON layer, geoJSON(). The picture below shows the result:

![Deliverable%202](https://github.com/cbrito3/Mapping_Earthquakes/blob/Earthquake_Challenge/Earthquake_Challenge/Deliverable%202.png)

# Deliverable 3
* A third map tile layer is created 
* The third map is added to the overlay object 
* All the earthquake data and tectonic plate data are displayed on the all maps of the webpage 

* Background: For this map we used our knowledge of JavaScript and Leaflet.js to add a third map style to the earthquake map, tile and base layer dark were the options used. The picture below shows the result:

![Deliverable%203](https://github.com/cbrito3/Mapping_Earthquakes/blob/Earthquake_Challenge/Earthquake_Challenge/Deliverable%203.png)
