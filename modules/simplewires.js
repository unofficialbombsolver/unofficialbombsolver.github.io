
function wires1(list) {
  var serial = "odd";
  if (($('#serialeven').hasClass('active')))
      {serial = "even"}

	var wires = [];
	wires = list;
	var count = 0;
    if (wires.length==3){
        	if (wires.indexOf("Red") < 0) {
            
            return("Cut the second wire");
        }
        if (wires.indexOf("White") == 2) {
            
            return("Cut the last wire");
        }
        for (var i=0; i< 3; i++) {
            if (wires[i] == "Blue") {
                count=count+1
            }

           
        }
        if (count>1) {
            
            return("Cut the last blue wire");
        }
        
        return("Cut the last wire");

    }
    
    if(wires.length == 4) {
    	count = 0
    	if (serial == "odd") {
      	for (var i=0; i< 4; i++) {
              if (wires[i] == "Red") {
                  count=count+1
              }
          }
          if (count > 1) {
          	return("Cut the last red wire");
          }
      }
        if (wires[3] == "Yellow" && wires.indexOf("Red") < 0) {
        	
        	return("Cut the first wire");
        }
        count=0;
        for (var i=0; i< 4; i++) {
            if (wires[i] == "Blue") {
                count=count+1
            }
        }
        if (count ==1) {
        	
        	return("cut the first wire");
        }
        count=0;
        for (var i=0; i< 4; i++) {
            if (wires[i] == "Yellow") {
                count=count+1
            }
        }
        if (count > 1) {
        	
        	return("Cut the last wire");
        }
        return("Cut the second wire");



    }
    if(wires.length == 5) {
    	if (wires[4] == "Black" && serial == "odd") {
    		
    		return("Cut the forth wire");
    	}
    	count=0;
        for (var i=0; i< 4; i++) {
            if (wires[i] == "Yellow") {
                count=count+1
            }
        }
        if (count > 1) {
        	count=0;
        	for (var i=0; i< 4; i++) {
            	if (wires[i] == "Red") {
               	 count=count+1
            	}
      	   }
      	   if (count ==1) {
      	   	
      	   	return("Cut the first wire");
      	   }	

        }
        if (wires.indexOf("Black") < 0) {
        	
        	return("Cut the second wire");
        }
       
        return("Cut the first wire");

    }
    if(wires.length == 6) {
    	//&& the last digit is odd
    	 if (wires.indexOf("Black") < 0 && serial == "odd") {
    	 	
    	 	return("Cut the third wire");
       	 }
       	 count=0
       	 for (var i=0; i< 4; i++) {
            	if (wires[i] == "White") {
               	 count=count+1
            	}
      	   }
      	 if (count > 1) {
      	 	count=0;
      	 	for (var i=0; i< 4; i++) {
            	if (wires[i] == "Yellow") {
               	 count=count+1
            	}
      	   }
      	   if (count ==1) {
      	   	
      	   	return("Cut the forth wire");
      	   }
      	 }
      	 if (wires.indexOf("Red") < 0) {
      	 	
      	 	return("Cut the last wire");
      	 }
      	 
      	 return("Cut the forth wire"); 

    }

};