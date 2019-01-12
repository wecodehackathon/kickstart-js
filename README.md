# Geographic service-finding for IRCO

## how to view this project

This additional section to be added to the IRCO site is now served as a portion of a static copy of the IRCO's 'youth' page, to run it yourself all you have to do is:

1. download this repository
2. open index.html in a browser

To add this map section to your application, complete with some pre-baked map locations, place the following snippet within your page's HTML:

```

      <style>
        /* Set the size of the div element that contains the map */
        #map {
            height: 400px;
            /* The height is 400 pixels */
            width: 100%;
            /* The width is the width of the web page */
        }
    </style>    <!--The div element for the map -->
    <div id="map"></div>
    <script>
        function addMarker(latitude, longitude, map) {
                var latLng = new google.maps.LatLng(latitude, longitude);
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    draggable: false
                });
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(map, marker);
                });
            }
       
        // Initialize and add the map
        function initMap() {
            // The location of Uluru
            var uluru = { lat: 45.52, lng: -122.67 };
            // The map, centered at Puppet
            var map = new google.maps.Map(
                document.getElementById('map'), { zoom: 10, center: uluru });
            // The marker, positioned at Puppet
            var marker1 = new google.maps.Marker({ position: uluru, map: map });
            var markers = [
                {
                    locName: 'IRCO',
                    lat: 45.52687,
                    lon: -122.556986,
                    street: '8040 N.E. Sandy Boulevard',
                    city: 'Portland',
                    state: 'OR',
                    zip: 97220
                }, {
                    locName: 'Earl Boyles Elementary',
                    lat: 45.494709,
                    lon: -122.551952,
                    street: '10822 S.E. Bush Street',
                    city: 'Portland',
                    state: 'OR',
                    zip: 97266
                }, {
                    locName: 'George Middle School',
                    lat: 45.596308,
                    lon: -122.736689,
                    street: '10000 North Burr Avenue',
                    city: 'Portland',
                    state: 'OR',
                    zip: 97203
                }];
            markers.forEach(marker => {
                addMarker(marker.lat, marker.lon, map);
            });
        }
    </script>
    <!--Load the API from the specified URL
    * The async attribute allows the browser to render the page while the API loads
    * The key parameter will contain your own API key (which is not needed for this tutorial)
    * The callback parameter executes the initMap() function
    -->
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBkuqTZuYig50pPb4aWin9L6lIJym3zLvw&callback=initMap">
    </script>

```