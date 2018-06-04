'use strict';

function sortByPPGDesc(objectArray){
  let sorted = objectArray.sort(function (a, b) {
    return b.PPG - a.PPG;
  })

  return {Players: sorted};
}

function calcAveragePPG(objectArray){
  let sum = 0;

  for ( let i = 0; i < objectArray.length; i++ ){
      sum += Number(objectArray[i].PPG);
  }

  let avg = sum / objectArray.length;

  return {AveragePPG: avg.toFixed(2)};
}

function findPlayerRank(objectArray){
  objectArray = sortByPPGDesc(objectArray).Players;

  let leaders = [];

  leaders[0] = {Gold: objectArray[0].Name, PPG: objectArray[0].PPG}
  leaders[1] = {Silver: objectArray[1].Name, PPG: objectArray[1].PPG}
  leaders[2] = {Bronze: objectArray[2].Name, PPG: objectArray[2].PPG}

  return {Leaders: leaders};
}

function findNumberInEachPostion(objectArray){
  let counts = objectArray.reduce((a, c) => {
    let position = c.Position;
    if (!a.hasOwnProperty(position)) {
      a[position] = 0;
    }
    a[position]++;
    return a;
  }, {});

  return {"": counts};
}

// gives different result to example json, suspect constant used for convesion differ
function findAverageHeightInCM(objectArray){
  let sum = 0;

  for ( let i = 0; i < objectArray.length; i++ ){
    let heightPart = objectArray[i].Height.split(" ");
    sum += ((Number(heightPart[0]) * 12) + Number(heightPart[2]));
  }

  return {AverageHeight: (sum / 0.39370 / objectArray.length).toFixed(1) + " cm"}; 
}

module.exports = {
  sortByPPGDesc,
  calcAveragePPG,
  findPlayerRank,
  findNumberInEachPostion,
  findAverageHeightInCM
}