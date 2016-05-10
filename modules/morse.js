function morseList() {
	var list = [["SHELL", "3.505"], ["HALLS", "3.515"], ["SLICK", "3.522"], ["TRICK", "3.532"], ["BOXES", "3.535"], ["LEAKS", "3.542"], ["STROBE", "3.545"], ["BISTRO", "3.552"], ["FLICK", "3.555"], ["BOMBS", "3.565"], ["BREAK", "3.572"], ["BRICK", "3.575"], ["STEAK", "3.582"], ["STING", "3.592"], ["VECTOR", "3.595"], ["BEATS", "3.600"]];
	return list;
}
function morseLetter(list) {
	var letters = {01: "A", 1000: "B", 1010: "C", 100: "D", 0: "E", 0010: "F", 110: "G", 0000: "H", 00: "I", 0111: "J", 101: "K", 0100: "L", 11: "M", 10: "N", 111: "O", 0110: "P", 1101: "Q", 010: "R", 000: "S", 1: "T", 001: "U", 0001: "V", 011: "W", 1001: "X", 1011: "Y", 1100: "Z"}
	list = list.join();
	list = list.replace(/Dot/g, "0");
	list = list.replace(/Dash/g, "1");
	list = list.replace(/,/g, "");
	console.log(list);
	return letters[Number(list)];

}

function morseReduceWords(letter, words) {
	var newlist = [];
	for (i = 0; i < words.length; i++) {
		if (words[i][0].indexOf(letter) > -1) {
			newlist.push(words[i]);
		}
	}
	return newlist;
 
}