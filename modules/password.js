function passwordWords() {
  words = ["about", "after", "again", "below", "could", "every", "first", "found", "great", "house", "large", "learn", "never", "other", "place", "plant", "point", "right", "small", "sound", "spell", "still", "study", "their", "there", "these", "thing", "think", "three", "water", "where", "which", "world", "would", "write"];
  return words;
}

function password(letters, placement) {
newlist = [];
  for (var i=0; i < letters.length; i++) {
    for (var j = 0; j < words.length; j++) {
      if (letters[i] == words[j][placement]) {
          newlist.push(words[j]);
          
      }
    }

  }
  words = newlist;
  return(words);
}