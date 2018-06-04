'use strict';

const path = require("path");
const csv = require("csvtojson");
const basketball = require('./basketball.js');

csv()
.fromFile(path.resolve(__dirname, 'chicago-bulls.csv'))
.then((jsonObj) => {
    console.log(basketball.sortByPPGDesc(jsonObj));
    console.log(basketball.calcAveragePPG(jsonObj));
    console.log(basketball.findPlayerRank(jsonObj));
    console.log(basketball.findNumberInEachPostion(jsonObj));
    console.log(basketball.findAverageHeightInCM(jsonObj));
})

