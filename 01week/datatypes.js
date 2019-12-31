function formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  
console.log(formatDate(new Date()));

console.log("Here's some data types:");


var dataBoolean = new Boolean(true);
var dataDecimal = 3.14;
var dataInteger = 69420;
var dataString = "nice";

console.log(dataBoolean + ' is type: ' + typeof dataBoolean);
console.log(dataDecimal  + ' is type: ' + typeof dataDecimal);
console.log(dataInteger + ' is type: ' +  typeof dataInteger);
console.log(dataString + ' is type: ' +  typeof dataString);


