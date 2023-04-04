window.onload = function() {
	
	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-22.906847, -43.172897),
			scrollWheel:false,
			zoom:12,
			MapTypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}

	function addMarker(lat,long,icon,content) {
		var latLng = {'lat':lat,'lng':long}

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});

		google.maps.event.addListener(marker, 'click', function(){
			infoWindow.open(map,marker);
		});
		
	}

	initialize();

	var conteudo = '<p style="color:black;font-size:13px;padding10px 0;">Meu endereço personalizado!</p>';
	addMarker(-22.905338, -43.173995,'',conteudo);
}