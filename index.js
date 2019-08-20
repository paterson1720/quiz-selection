const filters = require("./helpers/filters");
const fs = require("fs");
const data = fs.readFileSync("./data/example.json");
const JSONdata = JSON.parse(data);

let answeredCalls = filters.answeredCalls(JSONdata);
let losedCalls = filters.losedCalls(JSONdata);
let transferedCalls = filters.transferedCalls(JSONdata);
let departmentID = "5d22e0a1f920044fd47ba3a0";
let departmentCalls = filters.callsByDepartment(JSONdata, departmentID);

//Returns all the calls that last between 1 to 2 minutes.
let callsByMinutesRange = filters.callsByMinutesRange(JSONdata, 1, 2);

//Test 
console.log("ANSWERD CALLS: ", answeredCalls.length);
console.log(answeredCalls);
console.log("=====================================");

console.log("LOSED CALLS: ", losedCalls.length);
console.log(losedCalls);
console.log("=====================================");

console.log("TRANSFERED CALLS: ", transferedCalls.length);
console.log(transferedCalls);
console.log("=====================================");

console.log("DEPARTMENT CALLS: ", departmentCalls.length);
console.log(departmentCalls);
console.log("=====================================");

console.log("FILTERED MINUTES: ", callsByMinutesRange.length);
console.log(callsByMinutesRange);


