function mazeLogic(circle, start, end) {
    previousarray = [];
    previousarray.push(start);
    if (circle == 15 || circle == 64) {
      //First maze
      maze = mazeOne();
      return move(previousarray, start, end, 0, maze);
    }
    else if (circle == 23 || circle == 55) {
      //second maze
      maze = mazeTwo();
      return move(previousarray, start, end, 0, maze);
    }
    else if (circle == 43 || circle == 63) {
      //third maze
      maze = mazeThree();

      return move(previousarray, start, end, 0, maze);
    }
    else if (circle == 13 || circle == 16) {
      //fourth maze
      maze = mazeFour();
      return move(previousarray, start, end, 0, maze);
    }
    else if (circle == 41 || circle == 54) {
      //fifth maze
      maze = mazeFive();
      return move(previousarray, start, end, 0, maze);
    }
    else if (circle == 32 || circle == 56) {
      //sixth maze
     
      maze = mazeSix();
      return move(previousarray, start, end, 0, maze);
    }
    else if (circle == 21 || circle == 26) {
      //seventh maze
      maze = mazeSeven();
      return move(previousarray, start, end, 0, maze);
    }
    else if (circle == 33 || circle == 46) {
      //eigth maze
      maze = mazeEight();
      return move(previousarray, start, end, 0, maze);
    }
    else {
      //ninth maze
      maze = mazeNine();
      return move(previousarray, start, end, 0, maze);
    }
}

function shorten(numberarray) {

  for (i=0; i< numberarray.length-1; i++) {
    for (j=i+1; j< numberarray.length-1; j++) {
          //console.log(i,j);
      if (numberarray[i]==numberarray[j]) {
        //take out backwards moves in array from i to j
        beginning = numberarray.slice(0,i);
        ending = numberarray.slice(j, numberarray.length+1);
        numberfinal = beginning.concat(ending);  
        return shorten(numberfinal);

      }
    }
  }
  var WordArray = [];
  for (i=0; i< numberarray.length-1; i++) {
    if (numberarray[i]+1 == numberarray[i+1]) {
      //move up
      WordArray.push("up");
    }
    else if (numberarray[i]+10 == numberarray[i+1]) {
      //move right
      WordArray.push("right");
    }
    else if (numberarray[i]-1 == numberarray[i+1]) {
      //move right
      WordArray.push("down");
    }
    else if (numberarray[i]-10 == numberarray[i+1]) {
      //move right
      WordArray.push("left");
    }
  }
  console.log(WordArray);
//final return
  return WordArray;
}
// start number in array, start location, end location, move count, maze array to reference, blank
function move(previousarray, start, end, count, maze1, lastbackwardsmove) {
  if ((start == end) || count > 300) {
    console.log("done");
    console.log(previousarray);

   console.log("count is" + count);
   return shorten(previousarray);
   
   }
   
  
  else if ((maze1[start].up == true) && ($.inArray(start+1, previousarray) == -1)) {
    //go up
    
    previousarray.push(start+1);
    return move(previousarray, start+1, end, count+1, maze1, 0);
  }
  else if ((maze1[start].down == true) && ($.inArray(start-1, previousarray) == -1)) {
    //go down
    //console.log("down");
   
    previousarray.push(start-1);
    return move(previousarray, start-1, end, count+1, maze1, 0);
  }
  else if ((maze1[start].left == true) && ($.inArray(start-10, previousarray) == -1)) {
    //go left

   
    previousarray.push(start-10);
    return move(previousarray, start-10, end, count+1, maze1, 0);
  }
  else if ((maze1[start].right == true) && ($.inArray(start+10, previousarray) == -1)) {
    //go right

    
    previousarray.push(start+10);
    return move(previousarray, start+10, end, count+1, maze1, 0);
  }
  // if we have to backtrack
  else {

    newplacement = [1, -1, -10, 10];
    for (j=0; j < previousarray.length-1; j++) {
      //j iterates through our old options.
    var i=-1;
    for (var key in up) {

      i=i+1;
        if ((maze1[start][key] == true) && (previousarray[j] == start+newplacement[i]) && (start+newplacement[i] !== lastbackwardsmove)) {
            //make this move
            
            previousarray.push(start+newplacement[i]);
            lastbackwardsmove = start+newplacement[i];
              return move(previousarray, start+newplacement[i], end, count+1, maze1, lastbackwardsmove);

        }



    }
  }

  }
}


//All the maze objects
  var up = {
    up: true,
    down: false,
    left: false,
    right: false
  };
  var down = {
    up: false,
    down: true,
    left: false,
    right: false
  }
  var left = {
    up: false,
    down: false,
    left: true,
    right: false
  }
  var right = {
    up: false,
    down: false,
    left: false,
    right: true,
  }
  var updown = {
    up: true,
    down: true,
    left: false,
    right: false
  }
  var upleft = {
    up: true,
    down: false,
    left: true,
    right: false
  }
  var upright = {
    up: true,
    down: false,
    left: false,
    right: true
  }
  var downleft = {
    up: false,
    down: true,
    left: true,
    right: false
  }
  var downright = {
    up: false,
    down: true,
    left: false,
    right: true
  }
  var leftright = {
    up: false,
    down: false,
    left: true,
    right: true
  }
  var updownleft = {
    up: true,
    down: true,
    left: true,
    right: false
  }
  var updownright = {
    up: true,
    down: true,
    left: false,
    right: true
  }
  var downleftright = {
    up: false,
    down: true,
    left: true,
    right: true
  }
  var upleftright = {
    up: true,
    down: false,
    left: true,
    right: true
  }
  var updownleftright = {
    up: true,
    down: true,
    left: true,
    right: true
  }

function mazeOne() {
  maze1 = [];
  maze1[11] = up;
  maze1[12] = updownright;
  maze1[13] = updown;
  maze1[14] = updown;
  maze1[15] = updown;
  maze1[16] = downright;
  maze1[21] = left,
  maze1[22] = leftright;
  maze1[23] = right;
  maze1[24] = upright;
  maze1[25] = downright;
  maze1[26] = leftright;
  maze1[31] = upright;
  maze1[32] =downleft;
  maze1[33] = upleftright;
  maze1[34] = downleft;
  maze1[35] = upleft;
  maze1[36] = downleft;
  maze1[41] = upleft
  maze1[42] = down;
  maze1[43] = upleft;
  maze1[44] =downright;
  maze1[45] = upright;
  maze1[46] = downright;
  maze1[51] = right;
  maze1[52] = left;
  maze1[53] = right;
  maze1[54] = leftright;
  maze1[55] = leftright;
  maze1[56]= leftright;
  maze1[61] = upleft;
  maze1[62] = updown;
  maze1[63] = updownleft;
  maze1[64] = updownleft;
  maze1[65] = downleft;
  maze1[66] = left;
  return maze1;
}
function mazeTwo() {
  maze2 = [];
  maze2[11] = up;
  maze2[12] = up;
  maze2[13] = upright;
  maze2[14] = updown;
  maze2[15] = downright;
  maze2[16] = right;
  maze2[21] = upright;
  maze2[22] = down;
  maze2[23] = upleft;
  maze2[24] = downright;
  maze2[25] = upleft;
  maze2[26] = downleftright;
  maze2[31] = upleft;
  maze2[32] = updown;
  maze2[33] = downright;
  maze2[34] = upleft;
  maze2[35] = downright;
  maze2[36] = left;
  //
  maze2[41] = upright;
  maze2[42] = downright;
  maze2[43] = upleft;
  maze2[44] =downright;
  maze2[45] = upleft;
  maze2[46] = downright;
  //
  maze2[51] = leftright;
  maze2[52] = upleft;
  maze2[53] = down;
  maze2[54] = leftright;
  maze2[55] = upright;
  maze2[56]= downleftright;
  //
  maze2[61] = upleft;
  maze2[62] = updown;
  maze2[63] = updown;
  maze2[64] = updownleft;
  maze2[65] = downleft;
  maze2[66] = left;
return maze2;
}
function mazeThree() {
  maze3 = [];
  maze3[11] = upright;
  maze3[12] = updown;
  maze3[13] = updown;
  maze3[14] = downright;
  maze3[15] = up;
  maze3[16] = downright;
  maze3[21] = leftright;
  maze3[22] = upright;
  maze3[23] = updown;
  maze3[24] = updownleft;
  maze3[25] = down;
  maze3[26] = leftright;
  maze3[31] = leftright;
  maze3[32] = upleft;
  maze3[33] = updown;
  maze3[34] = updown;
  maze3[35] = updown;
  maze3[36] = downleft;
 
  maze3[41] = upleft;
  maze3[42] = updown;
  maze3[43] = updown;
  maze3[44] =downright;
  maze3[45] = upright;
  maze3[46] = down;
  //
  maze3[51] = upright;
  maze3[52] = updown;
  maze3[53] = updown;
  maze3[54] = downleft;
  maze3[55] = upleft;
  maze3[56]= downright;
  //
  maze3[61] = upleft;
  maze3[62] = updown;
  maze3[63] = updown;
  maze3[64] = updown;
  maze3[65] = updown;
  maze3[66] = downleft;
return maze3;
}
function mazeFour() {
  maze4 = [];
  maze4[11] = upright;
  maze4[12] = updownright;
  maze4[13] = updown;
  maze4[14] = updown;
  maze4[15] = updown;
  maze4[16] = downright;
  maze4[21] = leftright;
  maze4[22] = leftright;
  maze4[23] = right;
  maze4[24] = upright;
  maze4[25] = updown;
  maze4[26] = downleft;

  maze4[31] = left;
  maze4[32] = leftright;
  maze4[33] = leftright;
  maze4[34] = upleft;
  maze4[35] = downright;
  maze4[36] = right;
  //
  maze4[41] = right;
  maze4[42] = leftright;
  maze4[43] = upleftright;
  maze4[44] =downright;
  maze4[45] = leftright;
  maze4[46] = leftright;
  //
  maze4[51] = upleft;
  maze4[52] = downright;
  maze4[53] = leftright;
  maze4[54] = left;
  maze4[55] = leftright;
  maze4[56] = leftright;
  //
  maze4[61] = up;
  maze4[62] = updown;
  maze4[63] = updownleft;
  maze4[64] = updown;
  maze4[65] = updownleft;
  maze4[66] = downleft;
return maze4;
}
function mazeFive() {
  maze = [];
  maze[11] = up;
  maze[12] = updown;
  maze[13] = updown;
  maze[14] = updownright;
  maze[15] = downright;
  maze[16] = right;
  maze[21] = upright;
  maze[22] = downright;
  maze[23] = upright;
  maze[24] = downleft;
  maze[25] = leftright;
  maze[26] = leftright;
  maze[31] = leftright;
  maze[32] = leftright;
  maze[33] = leftright;
  maze[34] = right;
  maze[35] = leftright;
  maze[36] = leftright;
  
  maze[41] = leftright;
  maze[42] = upleftright;
  maze[43] = downleft;
  maze[44] = upleft;
  maze[45] = downleftright;
  maze[46] = leftright;
  //
  maze[51] = leftright;
  maze[52] = left;
  maze[53] = up;
  maze[54] = downright;
  maze[55] = upleft;
  maze[56]= downleftright;
  //
  maze[61] = upleft;
  maze[62] = updown;
  maze[63] = updown;
  maze[64] = downleft;
  maze[65] = up;
  maze[66] = downleft;
return maze;
}
function mazeSix() {
  maze = [];
  maze[11] = upright;
  maze[12] = downright;
  maze[13] = upright;
  maze[14] = updownright;
  maze[15] = updown;
  maze[16] = down;
  maze[21] = leftright;
  maze[22] = upleft;
  maze[23] = downleft;
  maze[24] = upleft;
  maze[25] = updown;
  maze[26] = downright;
  maze[31] = leftright;
  maze[32] = up;
  maze[33] = downright;
  maze[34] = up;
  maze[35] = updown;
  maze[36] = downleft;
  
  maze[41] = upleft;
  maze[42] = updown;
  maze[43] = updownleft;
  maze[44] = updown;
  maze[45] = downright;
  maze[46] = right;
  //
  maze[51] = right;
  maze[52] = upright;
  maze[53] = updown;
  maze[54] = downright;
  maze[55] = upleft;
  maze[56]= downleftright;
  //
  maze[61] = upleft;
  maze[62] = updownleft;
  maze[63] = down;
  maze[64] = upleft;
  maze[65] = updown;
  maze[66] = downleft;
return maze;
}
function mazeSeven() {
  maze = [];
  maze[11] = upright;
  maze[12] = updown;
  maze[13] = downright;
  maze[14] = upright;
  maze[15] = updown;
  maze[16] = downright;
  maze[21] = leftright;
  maze[22] = up;
  maze[23] = downleft;
  maze[24] = upleft;
  maze[25] = downright;
  maze[26] = leftright;
  maze[31] = leftright;
  maze[32] = upright;
  maze[33] = updownright;
  maze[34] = downright;
  maze[35] = left;
  maze[36] = leftright;
  
  maze[41] = leftright;
  maze[42] = leftright;
  maze[43] = leftright;
  maze[44] = left;
  maze[45] = upright;
  maze[46] = downleft;
  //
  maze[51] = upleftright;
  maze[52] = downleft;
  maze[53] = upleft;
  maze[54] = downright;
  maze[55] = upleft;
  maze[56]= downright;
  //
  maze[61] = upleft;
  maze[62] = updown;
  maze[63] = down;
  maze[64] = upleft;
  maze[65] = updown;
  maze[66] = downleft;
return maze;
}
function mazeEight() {
  maze = [];
  maze[11] = upright;
  maze[12] = updown;
  maze[13] = updown;
  maze[14] = updown;
  maze[15] = updownright;
  maze[16] = down;
  maze[21] = upleftright;
  maze[22] = down;
  maze[23] = upright;
  maze[24] = downright;
  maze[25] = upleftright;
  maze[26] = downright;
  maze[31] = leftright;
  maze[32] = upright;
  maze[33] = downleft;
  maze[34] = leftright;
  maze[35] = left;
  maze[36] = leftright;
  
  maze[41] = leftright;
  maze[42] = leftright;
  maze[43] = right;
  maze[44] = leftright;
  maze[45] = upright;
  maze[46] = downleft;
  //
  maze[51] = leftright;
  maze[52] = leftright;
  maze[53] = upleftright;
  maze[54] = downleft;
  maze[55] = upleft;
  maze[56]= downright;
  //
  maze[61] = left;
  maze[62] = left;
  maze[63] = upleft;
  maze[64] = updown;
  maze[65] = updown;
  maze[66] = downleft;
return maze;
}
function mazeNine() {
  maze = [];
  maze[11] = upright;
  maze[12] = updown;
  maze[13] = updown;
  maze[14] = updownright;
  maze[15] = updown;
  maze[16] = down;
  maze[21] = upleft;
  maze[22] = updown;
  maze[23] = down;
  maze[24] = upleftright;
  maze[25] = updown;
  maze[26] = downright;
  maze[31] = upright;
  maze[32] = updown;
  maze[33] = downright;
  maze[34] = upleft;
  maze[35] = downright;
  maze[36] = leftright;
  
  maze[41] = upleft;
  maze[42] = downright;
  maze[43] = upleft;
  maze[44] = downright;
  maze[45] = left;
  maze[46] = leftright;
  //
  maze[51] = upright;
  maze[52] = downleft;
  maze[53] = right;
  maze[54] = upleft;
  maze[55] = updown;
  maze[56]= downleftright;
  //
  maze[61] = left;
  maze[62] = up;
  maze[63] = updownleft;
  maze[64] = updown;
  maze[65] = updown;
  maze[66] = downleft;
return maze;
}