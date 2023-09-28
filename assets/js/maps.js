async function initMap() {
  // Request needed libraries.
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker"
  );

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 53.766429061054176, lng: -2.810369329555283 },
    mapId: "DEMO_MAP_ID",
  });

  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  // Add a marker clusterer to manage the markers.
  const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });
}

const locations = [
  { lat: 53.2983134897905, lng: -6.178661331778639 },
  { lat: 51.508525203618554, lng: -0.11812844246617288 },
  { lat: 53.4878584545374, lng: -2.28982793657325 },
];

initMap();
