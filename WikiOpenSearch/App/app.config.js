( function() {
  
  'use strict';
  
  angular.module( 'app.config', [] )
    .config( Config )

    Config.$inject = [ 
      '$stateProvider', 
      '$urlRouterProvider' 
    ];

    function Config( $stateProvider, $urlRouterProvider ) { 

      $stateProvider
      
      //Search UI
        .state( 'search', {
        url: '/search',
        templateUrl: 'App/UI/Search/search.html',
        controller: 'SearchController as search'
      })
      
      //Article UI
        .state( 'article', {
        url: '/article/:title',
        templateUrl: 'App/UI/Article/article.html',
        controller: 'ArticleController as article'
      })
      
      $urlRouterProvider.otherwise( '/search' );
    
    }
    
})();