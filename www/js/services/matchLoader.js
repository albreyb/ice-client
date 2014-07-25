app.factory('MatchLoader', function($http) {

  
  var matches = [];

  var MatchLoader = {

    loadAllMatches: function() {
      return $http({
        url: 'http://zavadil7.cloudapp.net/allcandidates/?apiKey=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlLZXkiOiJ6b3VuZHNfcGVla2luZyJ9.U-2sjzUTITlXuetMgYJJFEQ6LJQ-5mx1dLwUa6xQfFI&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmYl9pZCI6Ijk5OSJ9.XOGOON7gM54uZoZT9YuBtCimiv9JNR7qN9gcYofbomo',
        method: "GET"
      });
    },
    
    loadCurrentMatches: function() {
      return $http({
        url: 'http://zavadil7.cloudapp.net/matches/?apiKey=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlLZXkiOiJ6b3VuZHNfcGVla2luZyJ9.U-2sjzUTITlXuetMgYJJFEQ6LJQ-5mx1dLwUa6xQfFI&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmYl9pZCI6Ijk5OSJ9.XOGOON7gM54uZoZT9YuBtCimiv9JNR7qN9gcYofbomo',
        method: "GET"
      });
    }

  };

  return MatchLoader;

});