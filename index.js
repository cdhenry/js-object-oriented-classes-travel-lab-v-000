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
  let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

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
