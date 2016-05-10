
//red star cut, red light cut
function complicatedWires(blue, red, star, led) {
if (red == "yes" ) {
  red = true
} else {red = false}
if (blue == "yes" ) {
  blue = true
} else [blue=false]
if (star == "true" ) {
  star = true
} else {star=false}
if (led=="yes") {
  led=true
} else led=false
console.log("blue" + blue + "red" + red + "star" + star + "led" + led);

if((led && !blue && !red && !star) || (led && star && red && blue) || (star && blue && !red && !led)) {
  //D do not cut
  return ("Skip the wire");
}
if ((red && !blue && !led && !star) || (blue && !led && !red && !star) || (red && blue && !led && !star) || (red && blue && led && !star)) {
  //S cut if last digit of serial number is even
  if ($('#serialeven').hasClass('active')) {
    return ("Cut the wire");
  } else {
    console.log("serial number not even");
    return ("Skip the wire");
  }
}
if ((blue && led && !red && !star) || (blue && star && red && !led) /*|| (blue && star && led && !red)*/) {
  //P cut if parallel port
  if ($('#parallel1').hasClass('active')) {
    return ("Cut the wire");
  } else { console.log("parallel port is no");
    return ("Skip the wire");
  }
}
if ((!blue && !led && !red && !star) || (!blue && !led && !red && star) || (red && star && !led && !blue)) {
  return ("Cut the wire");
} else {
  //B -- cut if two or more batteries
  if ($('#bat2').hasClass('active') || $('#bat3').hasClass('active')) {
    return ("Cut the wire");
  } else {
    return ("Skip the wire");
  }
}
};