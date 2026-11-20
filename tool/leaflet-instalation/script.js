import {LeafletMap, TileLayer} from 'leaflet';
import 'leaflet/styles.css';

const map = new LeafletMap('map').setView([51.505, -0.09], 13);

new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

