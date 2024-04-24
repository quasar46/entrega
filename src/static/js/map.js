document.addEventListener('DOMContentLoaded', function () {
	if (document.querySelector('#map')) {
		ymaps.ready(init);
		function init() {
			var myMap = new ymaps.Map("map", {
				center: [55.76, 37.64],
				zoom: 7,
				controls: []
			});
			myMap.behaviors.disable('scrollZoom')
		}
	}

})
