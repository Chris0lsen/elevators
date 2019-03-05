class Elevator {
  trips = 0 // Number of trips this elevator has taken
  floor = 1 // Which floor this elevator is currently on
  maintenance = false // Whether the elevator is in maintenance mode
  target = 1 // What floor this elevator is currently going to
  doorOpen = true // Whether the doors are open
  occupied = false // Whether there are occupants inside
  floorsPassed = 0 // How many floors the elevator has passed in its trips
  constructor () {

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
  answerCall (target) {
    // Increment the trip counter
    this.trips++
    this.target = target
    if (this.trips >= 100) {
      this.maintenance = true
    }
  }
  move () {
    
  }
}
