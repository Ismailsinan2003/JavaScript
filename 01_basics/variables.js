const accountName="sinan"
let accountID="sinan@1234"
var accountCity="Bangalore"
accountAge=21

// accountName="saif"  // Not Allowed

accountID="saif@1234"
accountCity="jaipur"
accountAge=18

console.log(accountName);

console.table([accountName,accountID,accountCity,accountAge])

// prefer not to use var because of issue in block scope and functional scope
