let csv = require("csvtojson");
async function chargebackcalculator() {
    let jsonarray = await csv().fromFile("D:/Deel/Deel-Chargeback/Docs/Chargeback-Report.csv")
    //console.log("json array", jsonarray);
    let chargeback = jsonarray.filter((record) => record.chargeback==='TRUE');
console.log("Total records count", jsonarray.length);
console.log("Chargeback count", chargeback.length);

let chargeback1 = (chargeback.length/jsonarray.length)*100;
console.log(`Chargeback percentage is ${chargeback1}`);
}
chargebackcalculator();
