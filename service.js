(function() {

   angular.module('weatherApp')

   .service('weatherService', function($http, $q) {

         var geo = {};
// Getting Location Information ------------------
         this.getLocation = function() {

            var deferred = $q.defer();

            $http({
               method : "GET",
               url    : "http://ip-api.com/json"
            })
            .then(function(response) {

               geo.city = response.data.city;
               geo.regionName = response.data.regionName;

               geo.zip = response.data.zip;
               geo.countryCode = response.data.countryCode;

               console.log(geo);

               deferred.resolve(geo);

            });
            return deferred.promise;
         };








// Getting Location Information in Celcius ------------------

         this.getWeatherC = function(city, countryCode) {


            return $http({
               method : "GET",
               url    : "http://api.openweathermap.org/data/2.5/weather?zip=" + city + "," + countryCode + "&units=metric&APPID=09a6e1173eb3f14bf2d20e466daa506e"


            })
            .then(function(response){
               console.log(response.data.clouds.all);

               if(response.data.clouds.all < 10){
                  document.getElementById('container').style.backgroundImage = "url('pics/sunnyday.jpg')";

               }

               else if (response.data.clouds.all > 15){
                  document.getElementById('container').style.backgroundImage = "url('pics/cloudyday.jpg')";

               }

               return response;
            });
         };



// Getting Location Information in Farenhieght ------------------

         this.getWeatherF = function(city, countryCode) {
            return $http({
               method : "GET",
               url    : "http://api.openweathermap.org/data/2.5/weather?zip=" + city + "," + countryCode + "&units=imperial&APPID=09a6e1173eb3f14bf2d20e466daa506e"


            })
            .then(function(response){
               return response;
            });
         };



   });




}());
