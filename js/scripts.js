$(document).ready(function() {
  $("#foods").click(function(event) {
    event.preventDefault();
    var fruit1 = $("#fruit1").val();
    var fruit2 = $("#fruit2").val();
    var veg1 = $("#veg1").val();
    var veg2 = $("#veg2").val();
    var fruits = [fruit1, fruit2];
    var vegetables = [veg1, veg2];
    var foods = fruits.concat(vegetables);
    var fruitOutput = fruits[0] + " and " + fruits[1];
    $(".fruitOutput").text(fruitOutput);
    var vegOutput = vegetables[0] + " and " + vegetables[1];
    $(".vegOutput").text(vegOutput);
    var foodOutput = fruitOutput + " and " + vegOutput;
    $(".foodOutput").text(foodOutput);
  });
});
