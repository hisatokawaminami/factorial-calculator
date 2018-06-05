$(document).ready(function() {
  $("#submit").click(function(){
    var input = parseInt($("input#inputtedNumber").val());
    var total = 1

  if (input <= 0) {
   $(".output").text("Please enter a positive number");
  } else {
    for (var i = input; i > 1; i --) {
    total *= i;
  }
  $(".output").text(total);
}

  });
});
