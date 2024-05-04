export default class Time {
  // BEGIN
  /**
   * @param {string} time
   */
  static fromString(time) {
    let [hours, minutes] = time.split(':');

    return new Time(parseInt(hours), parseInt(minutes));
  }
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
