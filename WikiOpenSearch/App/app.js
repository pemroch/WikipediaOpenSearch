( function () {
  
  'use strict';

  angular.module( 'WikiOpenSearch', [
    'ui.router', 
    'ngMaterial',
    'ngSanitize',
    'app.config',
    'article.controller',
    'search.controller',
  ]);

})();