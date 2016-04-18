(function() {

   angular.module('weatherApp')

   .controller('weatherCtrl', function(weatherService) {
      var vm = this;



// Setting Location Information ------------------
      var currentLocation = function() {
         weatherService.getLocation()
         .then(function(response) {
            console.log(response);
            vm.geoLocation = response;
            weatherF(vm.geoLocation.city, vm.geoLocation.countryCode);
            weatherC(vm.geoLocation.city, vm.geoLocation.countryCode);
         });

      };
      currentLocation();


// Setting Celcius Information ------------------

      var weatherC = function(city, countryCode) {
         weatherService.getWeatherC(city, countryCode)
         .then(function(response) {
            console.log(response);
            vm.statsC = response.data;
         });
      };

      // weatherC();


// Setting Fahrenheit Information ------------------


      var weatherF = function(city, countryCode) {
         weatherService.getWeatherF(city, countryCode)
         .then(function(response) {
            console.log(response);
            vm.statsF= response.data;
         });
      };

      // weatherF();




   });

}());
