'use strict';

const path = require("path");
const csv = require("csvtojson");
const fs = require('fs');
const basketball = require('./basketball.js');

csv()
.fromFile(path.resolve(__dirname, 'chicago-bulls.csv'))
.then((jsonObj) => {
    const merged = Object.assign({}, basketball.sortByPPGDesc(jsonObj)
      , basketball.calcAveragePPG(jsonObj), basketball.findPlayerRank(jsonObj)
      , basketball.findNumberInEachPostion(jsonObj), basketball.findAverageHeightInCM(jsonObj));

      fs.writeFileSync(path.join(__dirname, 'chicago-bulls.json'), JSON.stringify(merged));
})

