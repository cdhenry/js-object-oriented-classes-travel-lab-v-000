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
    let verticalDiff = Math.abs(parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical));
    let horizontalDiff = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
    return verticalDiff + horizontalDiff;
  }

  //During off peak hours, a driver travels three blocks in a minute,
  //while during peak hours a driver travels an estimated two blocks in a minute.
  estimatedTime(peak = false) {
    debugger;
    if peak {
      return (blocksTravelled() / 3));
    }else{
      return (blocksTravelled() / 2);
    }
  }
}
