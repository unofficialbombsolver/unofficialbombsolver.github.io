function simon(color, strikes) {
	if ($('#vowelyes').hasClass('active')) {
		var vowel = true;
	} else {vowel = false}

	if ((strikes == 0 && color == "Red") ||
	 (vowel && strikes == 1 && color == "Green") ||
	  (vowel && color == "Yellow" && strikes == 2) ||
	   (!vowel && strikes == 0 && color == "Red") ||
	    (!vowel && strikes == 2 && color == "Green")) {
		return "Blue";
	} else if ((vowel && strikes == 0 && color == "Blue") ||
		(vowel && strikes == 2 && color == "Blue") ||
		(vowel && strikes == 1 && color == "Yellow") ||
		(!vowel && strikes == 1 && color == "Red") ||
		(!vowel && strikes == 0 && color == "Yellow") ||
		(!vowel && strikes ==2 && color == "Yellow")) {
		return "Red"
	} else if ((vowel && strikes == 1 && color =="Red") ||
		(vowel && strikes == 0 && color == "Green") ||
		(vowel && strikes == 2 && color == "Green") ||
		(!vowel && strikes == 0 && color == "Blue") ||
		(!vowel && strikes == 1 && color == "Green") ||
		(!vowel && strikes == 2 && color == "Red")
		) {
		return "Yellow"
	} else {return "Green"}

}