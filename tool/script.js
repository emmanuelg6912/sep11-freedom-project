
const map = L.map('map').setView([10, -0.203], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([-20, -10])
  .addTo(map)
  .bindPopup('you are currently here')
  .openPopup();
