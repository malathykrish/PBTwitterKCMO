twitter311Module.factory('googleMapsSvc', [
	function () {
		var initialize = function(id) {
			var mapOptions = {
				center: {lat: 39.102, lng: -94.583},
				zoom: 10,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				panControl: false,
				zoomControl: false,
				streetViewControl: false
			};
			return new google.maps.Map(document.getElementById(id), mapOptions);
		}

		var addMarkerWithInfoBubble = function(tweet, hexColor, markerSet, map) {
			var location = getLocation(tweet.coordinates.coordinates[1], tweet.coordinates.coordinates[0]);
			var markerImage = getMarkerImage(hexColor);
			var marker = new google.maps.Marker({
				position: location,
				map: map,
				icon: markerImage
			});
			markerSet.push(marker);
			addInfoWindow(tweet, marker, map);
		}

		var addDeptMarker = function(tweet, hexColor, markerSet, map) {
			var location = getLocation(tweet.latitude, tweet.longitude);
			var markerImage = getMarkerImage(hexColor);
			var marker = new google.maps.Marker({
				position: location,
				map: map,
				icon: markerImage
			});
			markerSet.push(marker);

			var infowindow = new google.maps.InfoWindow({
				content: "<small><strong>Request Type:</strong> " + tweet.request_type + "</small><br>" +
				"<small><strong>Work Group:</strong> " + tweet.work_group + "</small><br>" +
				"<small><strong>Street Address:</strong> " + tweet.street_address + "</small><br>" +
				"<small><strong>Status:</strong> " + tweet.status + "</small><br>",
				maxWidth: 150
			});
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
			});
		}

		var addStatusMarker = function(tweet, hexColor, markerSet, map) {
			var location = getLocation(tweet.latitude, tweet.longitude);
			var markerImage = getMarkerImage(hexColor);
			var marker = new google.maps.Marker({
				position: location,
				map: map,
				icon: markerImage
			});
			markerSet.push(marker);

			var infowindow = new google.maps.InfoWindow({
				content: "<small><strong>Request Type:</strong> " + tweet.request_type + "</small><br>" +
				"<small><strong>Department:</strong> " + tweet.department + "</small><br>" +
				"<small><strong>Work Group:</strong> " + tweet.work_group + "</small><br>" +
				"<small><strong>Street Address:</strong> " + tweet.street_address + "</small><br>",
				maxWidth: 150
			});
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
			});
		}

		var addTweetMarker = function(tweet, hexColor, markerSet, map) {
			var location = getLocation(tweet.latitude, tweet.longitude);
			var markerImage = getMarkerImage(hexColor);
			var marker = new google.maps.Marker({
				position: location,
				map: map,
				icon: markerImage
			});
			markerSet.push(marker);

			var infowindow = new google.maps.InfoWindow({
				content: "<small><strong>Case ID:</strong> " + tweet.case_id + "</small><br>" +
				"<small><strong>Department:</strong> " + tweet.department + "</small><br>" +
				"<small><strong>Tweet Text:</strong> " + tweet.tweetsam + "</small><br>",
				maxWidth: 150
			});
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
			});
		}

		var getLocation = function(latitude, longitude) {
			return new google.maps.LatLng(latitude, longitude);
		}

		var getMarkerImage = function(hexColor) {
			return new google.maps.MarkerImage(
				"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + hexColor,
				new google.maps.Size(21, 34),
				new google.maps.Point(0,0),
				new google.maps.Point(10, 34)
			);
		}

		var addInfoWindow = function(tweet, marker, map) {
			var infowindow = new google.maps.InfoWindow({
				content: "<small><strong>" + tweet.user.screen_name + ":</strong> " + tweet.text + "</small>",
				maxWidth: 150
			});
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
			});
		}

		// Sets the map on all markers in the array.
		var setAllMap = function(map, markerSet) {
			for (var i = 0; i < markerSet.length; i++) {
				markerSet[i].setMap(map);
			}
		}

		// Removes the markers from the map, but keeps them in the array.
		var clearMarkers = function(markerSet) {
			setAllMap(null, markerSet);
		}

		// Shows any markers currently in the array.
		var showMarkers = function(markerSet) {
			setAllMap(map, markerSet);
		}

		// Deletes all markers in the array by removing references to them.
		var deleteMarkers = function(markerSet) {
			clearMarkers(markerSet);
			markerSet = [];
		}

		return {
			initialize: initialize,
			addMarkerWithInfoBubble: addMarkerWithInfoBubble,
			addDeptMarker: addDeptMarker,
			addStatusMarker: addStatusMarker,
			addTweetMarker: addTweetMarker,
			clearMarkers: clearMarkers,
			showMarkers: showMarkers,
			deleteMarkers: deleteMarkers
		}
	}
]);