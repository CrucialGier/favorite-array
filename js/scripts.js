
$(document).ready(function() {

  $("form#fav-arrays").submit(function(event){
    var favAnimal = $("#answer-1").val();
    var favColor = $("#answer-2").val();
    var favCity = $("#answer-3").val();
    var favShow = $("#answer-4").val();
    var favThings = [favAnimal, favColor, favCity, favShow];
    var secondArray = [favThings[1],favThings[0],favThings[2]];
    secondArray.push(favThings[0]);
    secondArray.push(favThings[1]);
    secondArray.push(favThings[2]);
    secondArray.push(favThings[3]);
    $("#reveal li:nth-child(1)").text(secondArray[0]);
    $("#reveal li:nth-child(2)").text(secondArray[1]);
    $("#reveal li:nth-child(3)").text(secondArray[2]);
    $("#reveal li:nth-child(4)").text(secondArray[3]);
    $("#reveal li:nth-child(5)").text(secondArray[4]);
    $("#reveal li:nth-child(6)").text(secondArray[5]);
    $("#reveal li:nth-child(7)").text(secondArray[6]);    
    event.preventDefault();
  });
});
