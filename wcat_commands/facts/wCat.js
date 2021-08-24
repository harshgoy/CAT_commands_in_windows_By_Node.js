const fs = require("fs");

let f1KaData = fs.readFileSync("./f1.txt", "utf8");
let f2KaData = fs.readFileSync("./f2.txt", "utf8");

function applySFlag(data) {
 
  let emptyIncluded = false;
  let removedSpaces = [];
  let splittedData = data.split("\r\n");
  

  for (let i = 0; i < splittedData.length; i++) {
    if (splittedData[i] == "" && emptyIncluded == false) {
      removedSpaces.push(splittedData[i]);
      emptyIncluded = true;
    } else if (splittedData[i] != "") {
      removedSpaces.push(splittedData[i]);
      if(i < splittedData.length-2 ) emptyIncluded = false;
    }
  }
  let removedSpacesString = removedSpaces.join("\r\n");
  return removedSpacesString;
 
}

let removedSpacesString = applySFlag(f1KaData);
//console.log(removedSpacesString);

function applyBFlag(data){
    let count = 1;
    let splittedData = data.split("\r\n");
    for(let i=0 ; i<splittedData.length ; i++){
        if(splittedData[i] != ''){
            splittedData[i] = `${count}. ${splittedData[i]}`;
           
            count++;
        }
    }
    
    let bFlaggedString = splittedData.join("\n");
    return bFlaggedString;
}
let bFlaggedString = applyBFlag(f1KaData);
//console.log(bFlaggedString);

function applyNFlag(data){
    let count = 1;
    let splittedData = data.split("\r\n");
    for(let i=0 ; i<splittedData.length ; i++){
            splittedData[i] = `${count}. ${splittedData[i]}`;
            count++;
    }
    // console.log(splittedData);
    let nFlaggedString = splittedData.join("\n");
    return nFlaggedString;
}
console.log(applyNFlag(f1KaData));