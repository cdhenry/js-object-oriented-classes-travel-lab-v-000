class Driver{
  constructor(name, startDate){
    this.name = name;
    debugger;
    this.startDate = startDate;
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate;
  }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    return Math.abs(endingLocation - beginningLocation);
  }

  //During off peak hours, a driver travels three blocks in a minute,
  //while during peak hours a driver travels an estimated two blocks in a minute.
  estimatedTime() {

  }
}
