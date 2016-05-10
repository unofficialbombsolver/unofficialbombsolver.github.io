function getMemoryList() {
var memoryList = [{
        round: 1,
        position: undefined,
        valuee: undefined
    },
    {
        round: 2,
        position: undefined,
        valuee: undefined
    },
    {
        round: 3,
        position: undefined,
        valuee: undefined
    },
    {
        round: 4,
        position: undefined,
        valuee: undefined
    },
    {
        round: 5,
        position: undefined,
        valuee: undefined
    },
];
return memoryList;

}

function memory(display, round, memoryList) {

if (round==1) {
  if (display ==1) {
    memoryList[0].position = 2;
    return("Press the button in the second position")
  }
  if (display ==2) {
    memoryList[0].position = 2;
    return("Press the button in the second position")
  }
  if (display ==3) {
    memoryList[0].position = 3;
    return("Press the button in the third position")
  }
  if (display ==4) {
    memoryList[0].position = 4;
    return("Press the button in the fourth position")
  }
}

if (round==2) {
  if (display ==1) {
    memoryList[1].valuee = 4;
    return("Press the button labeled 4")
  }
  if (display ==2 || display ==4) {
    answer = memoryList[0].position;
    memoryList[1].position = answer;
    return("Press the button in the position of " + answer);
  }
  if (display ==3) {
    memoryList[1].position = 1;
    return("Press the button in the first position")
  }
}
if (round==3) {
  if (display ==1) {
    answer = memoryList[1].valuee;
    memoryList[2].valuee = answer;
    return("Press the button with the label " + answer);
  }
  if (display ==2) {
    answer = memoryList[0].valuee;
    memoryList[2].valuee = answer;
    return("Press the button with the label " + answer);
  }
  if (display ==3) {
    memoryList[2].position = 3;
    return("Press the button in the third position")
  }
  if (display ==4) {
    memoryList[2].valuee = 4;
    return("Press the button labeled 4")
  }

}
if (round==4) {
  if (display ==1) {
    answer = memoryList[0].position;
    memoryList[3].position = answer;
    return("Press the button with the position " + answer);
  }
  if (display ==2) {
    memoryList[3].position = 1;
    return("Press the button in the first position")
  }
  if (display ==3 || display==4) {
    //same position as stage 2
    answer = memoryList[1].position;
    memoryList[3].position = answer;
    return("Press the button with the position " + answer)
  }
}
if (round==5) {
  if (display ==1) {
    //same label as stage 1
    answer = memoryList[0].valuee;
    memoryList[4].valuee = answer;
    return("Press the button with the label " + answer)
  }
  if (display ==2) {
    memoryList[4].position = 1;
    return("Press the button in the first position")
  }
  if (display ==3) {
    //same label as stage 4
    answer = memoryList[3].valuee;
    memoryList[4].valuee = answer;
    return("Press the button with the label " + answer)
  }
  if (display ==4) {
    //same label as stage 3
    answer = memoryList[2].valuee;
    memoryList[4].valuee = answer;
    return("Press the button with the label " + answer)
  }

}

}