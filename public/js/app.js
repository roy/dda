(function(){
  var DDA = {
    initialize: function(){
      this.initMaps();
      this.initCountdown();
    },

    initMaps: function(){
      //var latlng = new google.maps.LatLng(52.630588, 4.729056);
      var latlng = new google.maps.LatLng(52.630588, 4.739567);
      var myOptions = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      
      var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

      var markerLng = new google.maps.LatLng(52.630823,4.7247);
      var marker = new google.maps.Marker({
        position: markerLng, 
        map: map, 
        title:"Hello World!"
      });
    },

    initCountdown: function(){
      $('#countdown_dashboard').countDown({
        targetDate: {
          'day':      21,
          'month':    4,
          'year':     2011,
          'hour':     20,
          'min':      30,
          'sec':      0                   
        },
        omitWeeks: true
      });

    }
  };

  jQuery(document).ready(function(){ DDA.initialize(); });
})();
