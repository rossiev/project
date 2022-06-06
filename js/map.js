ymaps.ready(init);

function init() {
 var myMap = new ymaps.Map("map", {
  center: [55.611409, 37.201122],
  zoom: 15,
  geometry: {
   type: "Point",
   coordinates: [55.75399400, 37.62209300]
  },
 });
 var myPlacemark = new ymaps.Placemark(
  // Координаты метки
  [55.61139477, 37.20111493]
 );
 myMap.geoObjects.add(myPlacemark);
}


ymaps.ready(init);


function init() {
 var myMap;
 $('#map').hover(function () {
   if (!myMap) {
    var myMap = new ymaps.Map("map", {
       center: [55.611409, 37.201122],
       zoom: 15,
       geometry: {
        type: "Point",
        coordinates: [55.75399400, 37.62209300]
       },
      },
     {
     searchControlProvider: 'yandex#search'
    });
     var myPlacemark = new ymaps.Placemark(
      // Координаты метки
      [55.61139477, 37.20111493],
     );
     myMap.geoObjects.add(myPlacemark);
   }
 });
}