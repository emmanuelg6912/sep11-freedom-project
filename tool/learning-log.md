# Tool Learning Log

## Tool: **Leaflet**

## Project: **Wheelchair GPS**

---

### 10/19/26:
* started browsing on leaflet 
    * started looking at the quick start guide for leaflet 
        *  to start using leaflet, copy and paste the given css file link and include a javascript file AFTER leaflet css
        *  Then, create a id where you want your given map to be 
        * make sure to include a defined height in a css file 
    * I first tinkered with the setup process to see if it would work 
    * then I decided to tinker with the different coordinate locations 
        EX:
        ```js
        const map = L.map('map').setView([10, -0.203], 13); //Im still not sure what this does 

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        L.marker([-20, -10]) // changing these given coordinates changed the position of the marker to the ocean!
        .addTo(map)
        .bindPopup('you are currently here')
        .openPopup();
        ```
    * based off of this, leaflet uses a different coordinate system with maps which may be confusing to understand 
* Although my tool works for customizing maps and makes the whole process of making a map more easier, I still need a tool that could help with APIS and GPS features 
* Im going to try to tinker more with the different pins and also customizable markers that are in leaflet and research more on tools that use GPS for people with disabilities. 

### 10/20/26:
* Text


<!-- 
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
