 console.log("button loaded");
function button(color, text) {
  console.log(color, text);
  console.log($('#bat2'));
  console.log($('#bat3'));


   if (color == "Blue" && text == "Abort") {
    return "hold";
  }
  //white and lit indicator car
   else if (color == "White" && $('#CAR').hasClass('active')) {
    return "hold";
  }
  //more than one battery and button says detonate
 // if (($('#bat2').hasClass('active')))
   else if (($('#bat2').hasClass('btn-primary') || $('#bat3').hasClass('btn-primary')) && text == "Detonate") {
    console.log("press and release");
    return "Press and immediately release the button";
  }
   else if ($('#bat3').hasClass('btn-primary') || $('#FRK').hasClass('btn-primary')) {
    return "Press and immediately release the button";
  }
   else if (color == "Yellow") {
    return "hold";
  }
   else if (color == "Red" && text == "Hold") {
    return "Press and immediately release the button";
  }
   else {return 'hold'};
}