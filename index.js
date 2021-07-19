/* Your Code Here */
function createEmployeeRecord(empArray) {
  const empObject = {
    "firstName": empArray[0],
    "familyName": empArray[1],
    "title": empArray[2],
    "payPerHour": empArray[3],
    "timeInEvents": [],
    "timeOutEvents": [],
  };
  return empObject;
}

function createEmployeeRecords(arrayArray) {
     const newArray = arrayArray.map((e) => {
               return createEmployeeRecord(e);
          });
     return newArray;
};

function createTimeInEvent(dateStamp) {
     const dateAndTime = dateStamp.split(" ");
     const timeAsInteger = parseInt(dateAndTime[1],10);

    this.timeInEvents.push({
          "type" : "TimeIn",
          "date" : dateAndTime[0],
          "hour" : timeAsInteger
     });
     return this;
}

function createTimeOutEvent(dateStamp) {
     const dateAndTime = dateStamp.split(" ");
     const timeAsInteger = parseInt(dateAndTime[1],10);

    this.timeOutEvents.push({
          "type" : "TimeOut",
          "date" : dateAndTime[0],
          "hour" : timeAsInteger
     });
     return this;
}

function hoursWorkedOnDate(date) {
     const timeOut = this.timeOutEvents.find((element) => {
          return element.date == date;
     }).hour;
     const timeIn = this.timeInEvents.find((element) => {
          return element.date == date;
     }).hour;
     return (timeOut - timeIn)/100;
}

function wagesEarnedOnDate(date) {
     const payRate = this.payPerHour;
     const hours = hoursWorkedOnDate.call(this,date);
     return hours * payRate;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function findEmployeeByFirstName(srcArray,name) {
     return srcArray.find((element) => {
          return element.firstName == name;
     });
}

function calculatePayroll(employeeObject) {
//reduce start at 0 
 return employeeObject.reduce((a,b) => {
      return a + allWagesFor.call(b);
 },0)
}

