let  csv = require("csvtojson");
async  function acceptanceRateCalculator(){

let  jsonArray = await csv().fromFile('D:/Deel/Deel-Acceptance-Rate/Docs/Globepay-Acceptance-Report.csv');
// console.log("json array", jsonArray);
let acceptanceRecords  = jsonArray.filter((record) => record.state==='ACCEPTED');

console.log("Total records count", jsonArray.length);
console.log("Acceptance records count", acceptanceRecords.length);

let acceptanceRate = (acceptanceRecords.length/jsonArray.length)*100;

console.log(`Acceptance Rate is ${acceptanceRate} %`);
}

acceptanceRateCalculator();



