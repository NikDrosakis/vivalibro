<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Leaflet Bus Simulator with Bus Stations</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <style>
    #map {
      height: 400px;
    }
    .bus-marker {
      width: 30px;
      height: 30px;
      background-image: url('/img/bus-icon.png'); /* Replace 'bus-icon.png' with your bus image */
      background-size: cover;
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
      color: white;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div id="map"></div>

  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
   <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script> <!-- Leaflet Control.Geocoder plugin -->
  <script>
    // Initialize Leaflet map
    var map = L.map('map').setView([35.386444091796875,24.596376419067383], 10); // Coordinates for Crete



    // Initialize Leaflet Control.Geocoder plugin with Mapbox Geocoding API
    var geocoder = L.Control.geocoder({
      geocoder: L.Control.Geocoder.mapbox('AIzaSyCXXjNkU19Z-oshcpXJ4dd005gD5PNbfM4')
    }).addTo(map);
    
    // Handle geocode result event
    geocoder.on('markgeocode', function(e) {
      var latlng = e.geocode.center; // Get coordinates of the geocoded location
      L.marker(latlng).addTo(map); // Add marker to the map at the geocoded location
    });
	
    // Add tile layer (e.g., OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Example bus data (bus markers)
    var busData = [
      { id: 1, latlng: [35.3509, 24.8502] },
      { id: 2, latlng: [35.3123, 24.9687] },
      { id: 3, latlng: [35.4012, 24.7411] }
      // Add more bus data as needed
    ];

    // Example bus station data (station markers)
    var stationData = [
      { name: "Station A", latlng: [35.386444091796875,24.596376419067383] },
      { name: "Station B", latlng: [35.3123, 24.9687] },
      { name: "Station C", latlng: [35.4012, 24.7411] }
      // Add more station data as needed
    ];

    // Create bus markers and add them to the map
    var busMarkers = [];
    busData.forEach(function(bus) {
	   var marker = L.marker(bus.latlng, {
        icon: L.divIcon({
          className: 'bus-marker',
          html: '<div>' + bus.id + '</div>' // Use bus number as the tag
        })
      busMarkers.push(marker);
    });
    });

    // Create station markers and add them to the map
    stationData.forEach(function(station) {
      var marker = L.marker(station.latlng).addTo(map);
      marker.bindPopup("<b>" + station.name + "</b>");
    });

  </script>
</body>
</html>
