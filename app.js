function initMap() {
    // Define the coordinates (latitude and longitude) for the location
    const location = { lat: -8.409518, lng: 115.188919 }; // Coordinates for Bali, Indonesia (example)

    // Create a map centered on the location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: location,
    });

    // Add a marker at the location using AdvancedMarkerElement
    const marker = new google.maps.marker.AdvancedMarkerElement({
        position: location,
        map: map,
    });
}
