$(document).ready (function() {

  var player = 1;

  $('.square').on('click', function(event){

      var squareSelected = $(this);


    if (squareSelected.hasClass ('fas fa-times') || squareSelected.hasClass ('far fa-circle')) {
      alert("This position has already been taken. Choose another one");
    } else {
      if (player == 1) {
        squareSelected.addClass('fas fa-times');
        if (checkIfPlayerwon('fas fa-times')){
          alert('Congrats! Player ' + player + ' has won');
        } else {
          player = 2;
        }
      } else {
        squareSelected.addClass('far fa-circle');
        if (checkIfPlayerwon('far fa-circle')) {
          alert('Congrats! Player ' + player + ' has won');
        } else {
          player = 1;
        }
      }
    }
  });
function checkIfPlayerwon (symbol) {
  // horizontal winning combos
  if ($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) {
    return true;
  } else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
    return true;
  } else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
    return true;
  // vertical winning combos
  } else if ($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
    return true;
  } else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
    return true;
  } else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
    return true;
  // diagonal winning combos
  } else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
    return true;
  } else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
    return true;
  } else {
    return false;
  }
}
});
