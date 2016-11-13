/*
    Goggle Maps Api
    API KEY = AIzaSyD3h7mZcHdepqeGNHMunyyASdf3B6_-YNQ
*/
function initMap() {
    var uluru = {lat: 53.734406, lng: -7.782982};
    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    
    var marker = new google.maps.Marker({
        position: uluru,
        icon: 'css/img/stMelsBreweryLogoGoogleMaps.png',
        title: 'St. Mels Brewey',
        map: map
    });
}