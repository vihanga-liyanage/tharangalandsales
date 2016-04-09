// Floating search boc JS
$(document).ready(function(){
    $("#search-header").click(function(){
        $("#search-content").slideToggle("slow");
    });
});

$(function() {
  $( "#slider-range" ).slider({
    orientation: "horizontal",
    range: true,
    values: [ 0, 150000000 ],
    max: 150000000,
    slide: function( event, ui ) {
      $( "#amount" ).val( "Rs. " + ui.values[ 0 ] + " - Rs. " + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "Rs." + $( "#slider-range" ).slider( "values", 0 ) +
    " - Rs. " + $( "#slider-range" ).slider( "values", 1 ) );
});