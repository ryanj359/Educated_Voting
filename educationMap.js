//CHECKLIST
//ADD A BUTTON TO TOGGLE WHICH DATA SET TO LOOK AT IN THE MAP
//USE AN IF STATEMENT

//if A certain a button is pushed>
// we change the value of "geoJsonLayer" to hold the new dataset
// we would then have to restyle the map to update thge value
// make sure that our styling is consistent with our data set


let value = 1970

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
  return d > 60 ? '#00441b' : // dark green
         d > 50 ? '#006d2c' : // dark medium green
         d > 40 ? '#238b45' : // medium green
         d > 30 ? '#41ab5d' : // light medium green
         d > 20 ? '#74c476' : // light green
         d > 10 ? '#a1d99b' : // lighter green
         d > 0 ? '#c7e9c0' : // very light green
        //  d > 10 ? '#e5f5e0' : // close to white light light green
        //  d > 0 ? '#f7fcf5' : // practically white light green
                   '#800026';  // Dark red
}

//Initial Style function
function style(feature) {

//if my boolean is true > DO THIS
//else > do this
 
  const aland = feature.properties["Percent of adults with a bachelor's degree or higher, " + value] ?? 0; // Use nullish coalescing to handle undefined
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
  geoJsonLayer = L.geoJson(geoJsonEducation, { style: style }).addTo(map);
}



L.geoJson(geoJsonEducation, {style: style}).addTo(map);
// L.geoJson(geoJsonEducation, {style: style}).addTo(map);
