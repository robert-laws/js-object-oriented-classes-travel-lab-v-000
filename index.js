class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    var beginning = new Date(year, 1, 1);
    return (beginning - this.startDate) / (1000*60*60*24*365)
  }
}
