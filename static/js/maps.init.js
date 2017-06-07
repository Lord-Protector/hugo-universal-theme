/* global GMaps: true */

$(document).ready(function () {
	map()
});

function map () {
	if ($('#map').length) {
		var lat = $('#gmap-lat').val();
		var lng = $('#gmap-lng').val();
		var image = '/img/marker.png';

		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
				center: [lat, lng],
				zoom: 16,
				controls: ["zoomControl"]
			});

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: 'ул. Фучика, д. 98, оф. 111',
				balloonContent: '<b>Адрес:</b> Россия, г. Казань, ул. Юнуса Фучика, д. 98, оф. 111<br><b>Почтовый адрес:</b> 420141, Россия, Республика Татарстан, г. Казань, а/я 255.'
			}, {
				iconLayout: 'default#image',
				iconImageHref: image,
				iconImageSize: [30, 42],
				iconImageOffset: [-15, -50]
			});

			myMap.geoObjects.add(myPlacemark);
			myMap.behaviors.disable('drag');
			myMap.behaviors.disable('scrollZoom');
			myMap.behaviors.disable('rightMouseButtonMagnifier');
			myMap.behaviors.disable('multiTouch');
		});
	}
}