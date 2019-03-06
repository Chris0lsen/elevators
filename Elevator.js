class Elevator {
  constructor () {
    this.trips = 0 // Number of trips this elevator has taken
    this.floor = 1 // Which floor this elevator is currently on
    this.maintenance = false // Whether the elevator is in maintenance mode
    this.target = [] // What floors this elevator is currently going to
    this.doorOpen = true // Whether the doors are open
    this.occupied = false // Whether there are occupants inside
    this.floorsPassed = 0 // How many floors the elevator has passed in its trips
    this.direction = null // Whether the elevator is going up or down
  }
  get trips () {
    return this.trips
  }
  set trips (trips) {
    this.trips = trips
  }
  get floor () {
    return this.floor
  }
  set floor (floor) {
    this.floor = floor
  }
  get maintenance () {
    return this.maintenance
  }
  set maintenance (maintenance) {
    this.maintenance = maintenance
  }
  get target () {
    return this.target
  }
  get doorOpen () {
    return this.doorOpen
  }
  set doorOpen (doorOpen) {
    this.doorOpen = doorOpen
  }
  get occupied () {
    return this.occupied
  }
  set occupied (occupied) {
    this.occupied = occupied
  }
  get floorsPassed () {
    return this.floorsPassed
  }
  set floorsPassed (floorsPassed) {
    this.floorsPassed = floorsPassed
  }
  /* Returns 1 if the elevator is going up and -1 if it's going down, and null if it has no target*/
  get direction () {
    return this.direction
    /*
    if (this.target) {
      if (this.target[0] > this.floor) {
        return 1
      } else {
        return -1
      }
    } else {
      return null
    }
    */
  }
  answerCall (target) {
    // Increment the trip counter
    this.trips++
    this.target.push(target).sort()
    if (target < this.floor) {
      this.direction = -1  
    } else {
      this.direction = 1
    }
    if (this.trips >= 100) {
      this.maintenance = true
    }
  }
  move () {
    if (this.target) {
      if (this.target[0] < this.floor) {
  
      } else {

      }
    }
  }
  finishTrip () {
    this.setOccupied = false
    this.doorOpen = true
    this.target = null
  }
}
