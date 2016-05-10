var symbolsRows = [[],[],[],[],[],[]];
            var symbolsCount = 0;

function symbols(ids) {
  symbolsCount = symbolsCount+1;
  var rowList = [];
  console.log(ids);
  for (i=0; i<ids.length; i++) {
  row = (ids[i][0])-1;
  console.log("row " + row);
  symbolsRows[row].push("symbol");
  console.log(symbolsRows);

}
//check to see if any rows are missing symbols
for (i=0; i<5; i++) {
  if (symbolsRows[i].length == symbolsCount) {
    rowList.push(i+1);
  }
}
console.log(rowList);

return rowList;
}