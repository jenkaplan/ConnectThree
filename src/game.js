// $(document).ready(function() {
// $('.column1').click(function(event){
//   $('.trump').attr("id","occupy");
//   $(event.target).html('Trump');
// })})

$('.column1').click(function(event){
  $('.trump').css("background-color","red")
})

function addPlayer () {

}

document.querySelector('.column1').addEventListener('click', addPlayer);
document.querySelector('.column2').addEventListener('click', addPlayer);
document.querySelector('.column3').addEventListener('click', addPlayer);
document.querySelector('.column4').addEventListener('click', addPlayer);
