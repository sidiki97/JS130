
/*

1 - 12 hours
0 - 59 minutes
0 - 59 seconds

clock object
with props

props
hour
minutes
secs

static method to update time (creates new Clock object)


*/

class Clock {


  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  static at(hour, minute) {
    let clock = new Clock(hour, minute);
    return clock;
  }

  overSixty(minutes) {
    let hours = 0;
    while (minutes > 59) {
      minutes -= 60;
      hours += 1;

    }


    return [hours, minutes];
  }

  add(minutes) {
    let currentMinute = this.minutes ? this.minutes : 0;
    let currentHour = this.hours ? this.hours : 0;

    let addMins = 0;
    let addHours = 0;

    currentMinute += minutes;
    if (currentMinute > 59) {
      [addMins, addHours] = this.overSixty(currentMinute);
      currentMinute = addMins;
      currentHour += addHours;
      console.log(currentHour);
    }


    let clock = Clock.at(currentHour, currentMinute);
    return clock;

  }

  stringifyTime(time) {
    let stringTime = time.toString();
    if (stringTime.length === 1) {
      stringTime = '0' + stringTime;
      return stringTime;
    }

    return stringTime;
  }

  toString() {
    let string = '00:00';
    if (this.hours) {
      string = this.stringifyTime(this.hours) + string.substring(2);
    }
    if (this.minutes) {
      string = string.substring(0, 3) + this.stringifyTime(this.minutes);
    }

    return string;


  }
}

module.exports = Clock;