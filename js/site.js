(function(window){

	$(document).ready(function(){
		$('.social-link').tooltip();

        // create a map in the "map" div, set the view to a given place and zoom
        //Co-ords - Kiel: {54.3333° N, 10.1333° E}
        //Co-ords - Toronto: {43.7000° N, 79.4000° W}
        var map = L.map('map').setView([54.3233, 10.133], 12);

        // add an OpenStreetMap tile layer
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(map);

        // add a marker in the given location, attach some popup content to it and open the popup
        L.marker([54.3233, 10.133]).addTo(map);
        //     .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
        //     .openPopup();
	});

})(window);



