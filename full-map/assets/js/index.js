mapboxgl.accessToken = 'pk.eyJ1IjoiamFja21jbWlsbGFuMjEiLCJhIjoiY2wyNTRkZ2JzMDNyMzNrbGpxdDJhcXUwYiJ9.9xryIEzpvPEdyZxTq1VVsg';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    Center: [0, 0], // starting position [lng, lat]
    interactive: false,
    zoom: 14 // starting zoom
});


function showLocation(position){
    if(!position)
        return;
    const {longitude, latitude} = position.coords;

   map.setCenter([longitude, latitude]);
}

//The 'failure' callback function
function errorHandler(){
console.log("nope");
}

if (navigator.geolocation){
    navigator.geolocation.watchPosition(showLocation, errorHandler, {enableHighAccuracy:true});
}else{
        console.log(`Geolocation is not supported b thr browser`);
}

showLocation();