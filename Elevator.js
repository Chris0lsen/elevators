class Elevator {
  constructor () {
    this.trips = 0 // Number of trips this elevator has taken
    this.floor = 1 // Which floor this elevator is currently on
    this.maintenance = false // Whether the elevator is in maintenance mode
    this.target = 1 // What floor this elevator is currently going to
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
  set target (target) {
    this.target = target
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
  get direction () {
    return this.target > this.floor ? 1 : -1
  }
  answerCall (target) {
    // Increment the trip counter
    this.trips++
    this.target = target
    if (this.trips >= 100) {
      this.maintenance = true
    }
  }
  move () {
    if (this.target) {
      if (this.target < this.floor) {
  
      } else {

      }
    }
  }
  finishTrip () {
    this.setOccupied = false
    this.doorOpen = true
  }
}
