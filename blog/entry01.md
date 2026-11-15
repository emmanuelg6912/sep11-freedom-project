# Entry 1
##### 11/09/26

### Context
In this project, I'm making an app that uses GPS navigation that changes its destination to specifically allow for more accessible routes for people with disabilities.
The tool that I've been planning to use for this project is [leaflet.js.](https://leafletjs.com/) To get familiar with using leaflet, I tinkered with the inclusion of navigation components such as inclusion of markers, circles, and polygons. I also tinkered with changing coordinates of different locations, and lastly, I tinkered more with changing specific components of the map interface(zoom in, zoom out, scrollwheel use.). I also tinkered with leaflet using [jsbin](https://jsbin.com/?html,output) which is a website that has html, css, and javascript, for tinkering of websites

### Tinker 1
Based on what I learned from the [quick start leaflet documentation,](https://leafletjs.com/examples/quick-start/) I decided to tinker with the setup of the map and the inclusion of markers, polygons, and circles in jsbin.
So I first set up the website by setting up a varible called ``const map = new LeafletMap('map').setView([51.505, -0.159], 15);```(sets up the map and the latitude, longitude, and zoom values).
Then I included ``L.tilelayer()`` which creates an open street view link so that the map image pops up. Then ending it with ``.addTo(map)`` which basically adds all the code to first variable that was created which is kind of like calling a function

```js
const map = L.map('map').setView([10, -0.203], 13);

   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; OpenStreetMap contributors'
   }).addTo(map);
```

I also decided to try and test out adding different shapes, markers, and implementation of polygons to see what it does. I first used ``L.marker`` which creates a marker, then like I did before, I included .addto(map) to set this up in the map variable that I made before. I also used .bindpopup() which creates a popup when the marker is loaded(Note: you also need to include ``.openPopup()`` to show the text.) I also changed the coordinate position inside of the markers to ``[-20,10]`` which is based on latitude and longitude positions.

```js
L.marker([-20, -10]) // changing these given coordinates changed the position of the marker to the ocean
   .addTo(map)
   .bindPopup('you are currently here')
   .openPopup();
```

Lastly, I included polygons, and circles to the map. This is first done by defining a variable which can be either circle or polygon, then using L.circle or L.polygon then including its latitude and longitude position. For circles you can include color changes, change the fill color of the circle, change the fill opacity, and change the radius of circles. For polygons, you can include as many positions as you want and color changes, opacity fill, and color fill can be added.

```js
//circles
var circle = L.circle([51.508, -0.11], {
   color: 'red',
   fillColor: '#f03',
   fillOpacity: 0.5,
   radius: 500
   }).addTo(map); // make sure to use add.To(map) to add the shape onto the map
//polygons
var polygon = L.polygon([
   [51.509, -0.08], // this represents the first point
   [51.503, -0.06], // second point
   [51.51, -0.047] //third point and so on...
   ]).addTo(map);
```

### Tinker 2
I Then focused more on the inclusion of mobile accessibility for [leaflets mobile app documentation](https://leafletjs.com/examples/mobile/) which has the same steps as setting up the map with the only difference being that there are different sizings added and there's more of a focus on user detection. The body will have a margin of 0 and a padding of 0 for css and the html, body, and ``#map`` components will have a height of 100, and width of 100.

```css
body {
   padding: 0;
   margin: 0;
   }
html, body, #map {
   height: 100%;
   width: 100vw;
   }
```

for html, you just need to add a ``<meta>`` element that shows a mobile browsers full size

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />  
```

For identifying user location, the steps were a little more complicated but became easier to understand when implemented. First, a shortcut is used that uses map.locate which looks for the map's location, then adding ``setView`` and setting it to true then using ``maxZoom`` which  sets the maximum zoom amount when the user location is true.

```js
map.locate({setView: true, maxZoom: 16});
```

Then create a function of your choice(recommended: set it to onLocationFound) and set the parameter to ``e``, create a variable called radius and make it equal to accuracy which shows how close your location is. Then use ``new`` and use ``Marker(e.latling)`` which creates a marker and states where the longitude and latitude will be. Lastly use ``new Circle`` then use ``e.latling`` again and add the radius variable that was added before and call the function using map.on then including ``'locationFound'`` which acts as an event listener and include the function ``onLocationFound``

```js
function onLocationFound(e) {
   const radius = e.accuracy;

   new Marker(e.latlng).addTo(map)  
       .bindPopup("You are within " + radius  + " meters from this point").openPopup(); // creates a popup that states how far away you are from your location

   new Circle(e.latlng, {radius}).addTo(map);
}

map.on('locationfound', onLocationFound);
```

Creating a location error is also similar to this with the only difference being that only an alert is used.

```js
function onLocationError(e) {
   alert(e.message);
}

map.on('locationerror', onLocationError);
```

### Tinker 3

My final tinker mainly focused on the addition of new controls for maps. For adding controls, there's many different components that can be added.

```js
L.control.extend() //creates a new map control. Can be useful for adding new items to the map
   L.DomEvent.on() //response to clicks. Can be useful for responsive maps
   map.locate() //asks the browser for location. Can be useful for tracking user locations
   map.addLayer()/map.removeLayer() //adds or removes location marker. Can be useful for removing markers you may not need
```

Using this knowledge, I decided to test out the different map controls on jsbin. I used ``center`` which just defines where the map will be viewed at. Then I also included zoom which sets the starting zoom, then I used ``minZoom``  which sets the minimum zoom, and I used ``maxZoom`` to set the maximum zoom. Finally, I made sure to include ``scrollWheelZoom`` and set it to true that way so that the user can scroll freely. 

```js
const map = L.map('map', {
       center: [40.7, -74], //sets the position of the map to new york
       zoom: 12, // sets the starting zoom to 12
       minzoom:3, // sets the minimum zoom to 3
       maxzoom:19, //sets the maximum zoom to 19
       scrollwheelZoom: true // this will make it so that the user can use the scrollwheel to zoom in or out
       });
```

### Sources
* [leaflet.js](https://leafletjs.com/)
* [leaflets mobile app documentation](https://leafletjs.com/examples/mobile/)
* [quick start leaflet documentation](https://leafletjs.com/examples/quick-start/)
* [jsbin](https://jsbin.com/?html,output)

### Engineering Design Process/EDP
* I am currently in the first step of the engineering design process. I'm still currently researching and learning about my tool and how its components work, what it's used for, and how my tool can be used for my project idea. I'm also tinkering more with the different commands for leaflet.js which is what helps me in having a greater understanding of the overall concepts that I'm using for my tool.

### Skills
* the skills that I need to have in order to be successful in the project would be **time-management**, **debugging**, and **problem decomposition**. Time management is important because instead of researching my tool last minute each week, I make sure to research my tool each day for a short amount of time, and with days that I have more time, I spend longer periods of time researching my tool which allows me to understand more concepts quicker. Being able to debug was also important because I learned better through tinkering concepts and testing out different parts of my tool rather than copying and pasting and also allows me to put the concepts that I research into use. The last thing I need to implement is problem decomposition. At times some lines of code in leaflet are really long and can get really confusing at times. However, being able to delegate tasks one by one, separating code, and explaining each part piece by piece allowed me to understand the code I was using.

[Next](entry02.md)
[Home](../README.md)