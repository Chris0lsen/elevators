class Elevator {
  trips = 0 // Number of trips this elevator has taken
  floor = 1 // Which floor this elevator is currently on
  maintenance = false // Whether the elevator is in maintenance mode
  target = 1 // What floor this elevator is currently going to
  doorOpen = true // Whether the doors are open
  constructor () {

  }
  getTrips () {
    return this.trips
  }
  setTrips (trips) {
    this.trips = trips
  }
  getFloor () {
    return this.floor
  }
  setFloor (floor) {
    this.floor = floor
  }
  getMaintenance () {
    return this.maintenance
  }
  setMaintenance (maintenance) {
    this.maintenance = maintenance
  }
  getTarget () {
    return this.target
  }
  setTarget (target) {
    this.target = target
  }
  answerCall (target) {
    const newTripCount = this.getTrips()++
    // Increment the trip counter
    this.setTrips(newTripCount)
    this.setTarget(target)
    if (newTripCount >= 100) {
      this.setMaintenance(true)
    }
  }
  move () {
    
  }
}
