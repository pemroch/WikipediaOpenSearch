( function () {
  
  'use strict';
  
  angular.module( 'article.controller', [] )
    .controller( 'ArticleController', ArticleController );
  
  ArticleController.$inject = [
    '$http',
    '$stateParams',
    '$timeout'
  ];
  
  function ArticleController( $http, $stateParams, $timeout ) {
    
    var vm = this;
    
    vm.text;
    // Shows the progress cirlce.
    vm.loading = true;
    // Disables the search button.
    vm.search = true;
    // Hides the content.    
    vm.content = false;
    // Sets the title of the header to the title of the article passed from the 'search' state.
    vm.title = $stateParams.title;
    
    // Wrapped in $timeout to give the state enought time to transition.
    $timeout( function() { loadArticle(); })
    
    function loadArticle() {
      // Makes an api request for the article based on the '$stateParams.title' title passed from the 'search' state.
      $http.jsonp( "https://en.wikipedia.org/w/api.php?action=mobileview&format=json&page=" + $stateParams.title + "&sections=all&prop=text|sections|normalizedtitle|hasvariants|displaytitle|pageprops|description&pageprops=*&sectionprop=toclevel|level|line|number|index|fromtitle|anchor&redirect=yes&formatversion=2&callback=JSON_CALLBACK" )
        .then( function( article ) {
        // 'mobileview' returns the article as an array seperated by sections in the Wikipedia article.
        // We iterate of the sections to extract the html then bind it to vm.text in the view
        angular.forEach( article.data.mobileview.sections, function( value, key ) { 
          vm.text += value.text; 
        });
        // Once the article sections are bound to the view, we call the showContent function 
        // to hide the progress cirlce, enable the search button, and display the content.
        showContent();
      })
    }
    function showContent() {
      // Hides the progress cirlce.
      vm.loading = false;
      // Enables the search button.
      vm.search = false;
      // Shows the content.
      vm.content = true;      
    }
    
  }
  
})();