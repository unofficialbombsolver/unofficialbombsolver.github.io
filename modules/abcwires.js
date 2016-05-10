blueocc = 1;
redocc = 1;
blackocc = 1;
function ABCwires(color, letter) {
	var blue = ['b', ['a', 'c'], 'b', 'a', 'b', ['b', 'c'], 'c', ['a', 'c'], 'a'];
	var black = ['d', ['a', 'c'], 'b', ['a', 'c'], 'b', ['b', 'c'], ['a', 'b'], 'c', 'c'];
	var red = ['c', 'b', 'a', ['a', 'c'], 'b', ['a', 'c'],  'd', ['a', 'b'], 'b']
	if (color == 'blue') {
		if (blue[blueocc-1] == letter || blue[blueocc-1][0] == letter || blue[blueocc-1][1] == letter) {
      blueocc = blueocc + 1;
		return("Cut the wire");
    
		}
    blueocc = blueocc + 1;
		return("Skip the wire");
    
	}
	if (color == 'black') {
		if (blackocc == 1) {
      blackocc = blackocc + 1;
			return("Cut the wire");
		}
		if (black[blackocc-1] == letter || black[blackocc-1][0] == letter || black[blackocc-1][1] == letter) {
     blackocc = blackocc + 1;
		return("Cut the wire");
   
		}
		blackocc = blackocc + 1
		return("Skip the wire");
    ;
	}
	if (color == 'red') {
		if (redocc == 7) {
      redocc = redocc + 1;
			return("Cut the wire");
      
		}
		if (red[redocc-1] == letter || red[redocc-1][0] == letter || red[redocc-1][1] == letter) {
		redocc = redocc + 1;
		return("Cut the wire");
    
		}
		redocc = redocc + 1;
		return("Skip the wire");
    
	}
}

function removeWire(color, letter) {
	if (color == "blue") {
		blueocc = blueocc -1

	}
	if (color == "red" ) {
		redocc = redocc -1
	}
	if (color == "black") {
		blackocc = blackocc-1
	}

}