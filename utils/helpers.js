const { escapeExpression, SafeString } = require("handlebars");
const { options } = require("../controllers");
const dayjs = require("dayjs");
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

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
    finalReturn = ''
    returnedWrap.forEach(item => {
      finalReturn += options.fn(item)
    });
    return finalReturn
  },

  schedNotes: (timeOff, options) => {
    var timeOffArray = [timeOff]
    returnWrap = []
    
    for (i = 0; i < timeOffArray[0].days.length; i++) {
      returned = {}
      returned.date = timeOffArray[0].days[i].fullDate
      returnWrap.push(returned)
      dailySick = []
      dailyPTO = []
      for (f = 0; f < timeOffArray[0].timeOff.length; f++) {
        if (timeOffArray[0].timeOff[f].end_date != null) {
          if (dayjs(timeOffArray[0].days[i].fullDate.toString()).isBetween(timeOffArray[0].timeOff[f].start_date.toString(), timeOffArray[0].timeOff[f].end_date.toString(), 'day', '[]')){
            workerName =`${timeOffArray[0].timeOff[f].employee.first_name} ${timeOffArray[0].timeOff[f].employee.last_name} is taking PTO today`
            dailyPTO.push(workerName)
          }
        } else if (timeOffArray[0].timeOff[f].end_date === null) {
          if (timeOffArray[0].days[i].fullDate === timeOffArray[0].timeOff[f].start_date){
            workerName =`${timeOffArray[0].timeOff[f].employee.first_name} ${timeOffArray[0].timeOff[f].employee.last_name} is sick today`
            dailySick.push(workerName)
          }
        }
        returned.pto = dailyPTO
        returned.sick = dailySick
        
      }
      
    }
    finalReturn = ''
    returnWrap.forEach(item => {
      finalReturn += options.fn(item)
  })
  return finalReturn
  },

  availCheck: (avail, options) => {
    if(avail === true) {
      return new SafeString('checked')
    } else {
      return new SafeString('')
    }
  },

  profileAvailCheck: (avail, options) => {
    if(avail === true) {
      return new SafeString('<p class="w-[33%] text-center text-green-800">Working</p>')
    } else {
      return new SafeString('<p class="w-[33%] text-center text-red-800">Not Working</p>')
    }
  }
}