mapboxgl.accessToken = 'pk.eyJ1IjoiamFja21jbWlsbGFuMjEiLCJhIjoiY2wyNTRkZ2JzMDNyMzNrbGpxdDJhcXUwYiJ9.9xryIEzpvPEdyZxTq1VVsg';


function showLocation(position){
    const {longitude, latitude} = position.coords;
    console.log(`Longitude: ${longitude}`);
    console.log(`Latitude: ${latitude}`);

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [longitude, latitude], // starting position [lng, lat]
        interactive: false,
        zoom: 14 // starting zoom
    });
}

//The 'failure' callback function
function errorHandler(){
console.log("nope");
}

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showLocation, errorHandler, {enableHighAccuracy:true});
}else{
        console.log(`Geolocation is not supported b thr browser`);
}

showLocation();