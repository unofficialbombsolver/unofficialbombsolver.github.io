 console.log("button loaded");
function button(color, text) {
  if (color == "Blue" && text == "Abort") {
    return "hold";
  };
  //white and lit indicator car
   if (color == "White" && $('#CAR').hasClass('active')) {
    return "hold";
  };
  //more than one battery and button says detonate
 // if (($('#bat2').hasClass('active')))
   if ($('#bat2').hasClass('active') || $('#bat3').hasClass('active') && text == "Detonate") {
    return "Press and immediately release the button";
  };
   if ($('#bat3').hasClass('active') || $('#FRK').hasClass('active')) {
    return "Press and immediately release the button";
  };
   if (color == "Yellow") {
    return "hold";
  };
   if (color == "Red" && text == "Hold") {
    return "Press and immediately release the button";
  };
   return 'hold';
}