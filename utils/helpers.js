const { escapeExpression, SafeString } = require("handlebars");

module.exports = {
  schedEachDay: (days, options) => {
    var day
    var dayArray = [days]
    returnedWrap = []
    function checkDay(dayToCheck) {
    // Check day
    if(dayToCheck === 'Sun') {
      day = 'works_sunday'
    } else if (dayToCheck === 'Mon'){
      day = 'works_monday'
    } else if (dayToCheck === 'Tue') {
      day = 'works_tuesday'
    } else if (dayToCheck === 'Wed') {
      day = 'works_wednesday'
    } else if (dayToCheck === 'Thu') {
      day = 'works_thursday'
    } else if (dayToCheck === 'Fri') {
      day = 'works_friday'
    } else if (dayToCheck === 'Sat') {
      day = 'works_saturday'
    }
    return day
  }
  // For each day, label new array entry with day name
    for(i = 0; i < dayArray[0].days.length; i++) {
      checkDay(dayArray[0].days[i].day)
      returned = {}
      returned.day = dayArray[0].days[i].day
      returnedWrap.push(returned)
      dailyWorkers = []
      // For each employee, check if they work on current day
      // Push working employees for each day to array
      for(f = 0; f < dayArray[0].sched.length; f++) {
        if (dayArray[0].sched[f][day] === true) {
          workerName =`${dayArray[0].sched[f].first_name} ${dayArray[0].sched[f].last_name}`
          dailyWorkers.push(workerName)
        }
      // Add list of workers for each day to appropriate day
      returned.workers = dailyWorkers
      }
    }
    console.log(returnedWrap)
    finalReturn = ''
    returnedWrap.forEach(item => {
      finalReturn += options.fn(item)
    });
    
    console.log(finalReturn)
    return finalReturn
  },
}