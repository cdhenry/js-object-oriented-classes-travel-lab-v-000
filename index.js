let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let verticalDiff = parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical)
    let horizontalDiff = this.endingLocation.horizontal - this.beginningLocation.horizontal
    return Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
  }

  //During off peak hours, a driver travels three blocks in a minute,
  //while during peak hours a driver travels an estimated two blocks in a minute.
  estimatedTime() {

  }
}
