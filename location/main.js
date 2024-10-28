document.getElementById("getLocation").addEventListener("click", getLocation);

function getLocation () {
    const locationDisplay = document.getElementById("displayLocation");
    const button = document.getElementById("getLocation");

    button.disabled = true;
    button.textContent = "Loading...";

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            locationDisplay.textContent= `Latitude: ${latitude}, Longitude: ${longitude}`;
            button.disabled = false;
            button.textContent = "Get Location";
        },
        (error) => {
            locationDisplay.textContent = `Error getting location: ${error.message}`;
            button.disabled = false;
            button.textContent = "Get Location";
        }
      );
    } else {
        locationDisplay.textContent= "Geolocation is not supported by browser";
        button.disabled = false;
        button.textContent = "Get Location";
    }
}