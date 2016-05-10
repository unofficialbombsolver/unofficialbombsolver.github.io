

function addButton(button) {
//$("Button"+button).effect( "highlight", {color: 'red'}, 3000 );
$(".test #btn.checked").removeClass("active");
 $(this).toggleClass('btn-primary');
 //console.log($(this).val());
}

function initialQuery(ModuleList) {
console.log(ModuleList);
var conditions = [];

if ($.inArray("Wires", ModuleList) !== -1) {
  //find last digit of serial number, even or odd
  conditions.push("serialdigit");
};
if ($.inArray("Button", ModuleList) !== -1) {
  //number of batteries (more than 1), lit indicator CAR, FRK
  conditions.push("batteries1");
  conditions.push("car");
  conditions.push("frk");
};
if ($.inArray("Simon", ModuleList) !== -1) {
  //if the serial number contains a vowel
  conditions.push("serialvowel");
};
if ($.inArray("Complicated", ModuleList) !== -1) {
  //last digit of serial number even or odd
  if ($.inArray("serialdigit", conditions) == -1) {
      conditions.push("serialdigit");
    }
  //parallel port
  conditions.push("parallel");
  //two or more batteries
  if ($.inArray("batteries1", conditions) == -1) {
      conditions.push("batteries1");
    }
  
};
return conditions;
};






