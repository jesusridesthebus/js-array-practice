$(function(){
  $("#formOne").submit(function(event){
    var foodInput = $("input#food").val();
    var movieInput = $("input#movie").val();
    var animalInput= $("input#animal").val();
    var socksInput = $("input#socks").val();
    var verbInput = $("input#verb").val();
    var favorites = [foodInput, movieInput, animalInput, socksInput, verbInput];

    // var favoriteSelect = [favorites[1], favorites[0], favorites[2]]; shorter way of doing the below, without push

    var favoriteSelect = [];
    favoriteSelect.push(favorites[1], favorites[0], favorites[2]);

    $("#favorites1").text(favoriteSelect.slice(1,2));
    $("#favorites0").text(favoriteSelect.slice(0,1));
    $("#favorites2").text(favoriteSelect.slice(2,3));

    event.preventDefault();
  });

});
