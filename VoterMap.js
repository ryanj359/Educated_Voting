//CHECKLIST
//ADD A BUTTON TO TOGGLE WHICH DATA SET TO LOOK AT IN THE MAP
//USE AN IF STATEMENT

//if A certain a button is pushed>
// we change the value of "geoJsonLayer" to hold the new dataset
// we would then have to restyle the map to update thge value
// make sure that our styling is consistent with our data set


let value = 1972

//THIS IS THE VARIABLE YOU WILL USE TO HOLD THE CURRENTY DATA STATE
let geoJsonLayer; // Declare a global variable for the GeoJSON layer


function setup() {
  noCanvas()
}

// All we need to do here is update the value, and reStyle the Map
function listFunction() {
  value = document.getElementById("List").value
  console.log(value)

  restyleMap()
}

// This is looking at democratic percentage votes and using this as
// a barmoeter for how "blue" or "red" something should be.
function getColor(d) {
  return d > 0.9 ? '#08306b' : // Dark blue
         d > 0.8 ? '#2171b5' : // Medium blue
         d > 0.7 ? '#4292c6' : // Light blue
         d > 0.6 ? '#6baed6' : // Sky blue
         d > 0.5 ? '#9ecae1' : // Very light blue
         d > 0.4 ? '#fdd0a2' : // Light orange
         d > 0.3 ? '#fdae6b' : // Medium orange
         d > 0.2 ? '#fd8d3c' : // Orange-red
         d > 0.1 ? '#e31a1c' : // Bright red
                   '#800026';  // Dark red
}

//Initial Style function
function style(feature) {

//if my boolean is true > DO THIS
//else > do this

  const aland = feature.properties[value + "_democratic_percent_votes"] ?? 0; // Use nullish coalescing to handle undefined
  return {
      fillColor: getColor(aland), // Your color logic here
      weight: .5,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.6
  };
}


// Function to restyle the map
function restyleMap() {
  // Remove the old layer if it exists
  if (geoJsonLayer) {
      map.removeLayer(geoJsonLayer);
  }

  // Add the GeoJSON layer with updated styling
  geoJsonLayer = L.geoJson(geoJsonElections, { style: style }).addTo(map);
}



L.geoJson(geoJsonElections, {style: style}).addTo(map);





