$(document).ready(function() {
  $('#submitButton').click(function() {

    var yourWeight = $('#weight').val();
    var planet = $('#planet').find(':selected').val();
    var value = $('#planet').find(':selected').text();

    var result = (yourWeight * planet).toFixed(2);

    $("#result").text("If you were on " + value + "," + " you would weigh " + result + " lbs.");
  });

});
