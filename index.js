/* Your Code Here */
function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1] ,
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr){
    return arr.map(arr => {
        return createEmployeeRecord(arr)
    })
}

function createTimeInEvent(date_hour){

    const [date, hour] = date_hour.split(" ")
    return {
        type: "TimeIn",
        hour: hour,
        date: date,
    }
    
}
//createTimeInEvent("2001-09-11 1200")

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

