class Elevator {
  constructor () {
    this.trips = 0 // Number of trips this elevator has taken
    this.floor = 1 // Which floor this elevator is currently on
    this.maintenance = false // Whether the elevator is in maintenance mode
    this.target = [] // What floors this elevator is currently going to
    this.doorOpen = true // Whether the doors are open
    this.occupied = false // Whether there are occupants inside
    this.floorsPassed = 0 // How many floors the elevator has passed in its trips
    this.direction = null // Whether the elevator is going up (1),down (-1), or stationary (null)
  }

  /*
   * Assign the target floor to this elevator.
   * Add the floor to the stack of floors we're going to,
   * and re-sort the target array, reversing it if we're
   * going down
   */
  answerCall (target) {
    // Increment the trip counter
    this.trips++
      this.target.push(target).sort()
    if (target < this.floor) {
      this.target.push(target).reverse()
      this.direction = -1  
    } else {
      this.direction = 1
    }
    if (this.trips >= 100) {
      this.maintenance = true
    }
  }

  /*
   * Update elevator stats upon moving a floor.
   */
  move () {
    if (this.target) {
      if (this.target[0] > this.floor) {
        this.direction = 1 
        this.floorsPassed++
      } else  if (this.target[0] < this.floor) {
        this.direction = -1
        this.floorsPassed++
      } else {
        this.target.unshift()
        if (this.target.length === 0) {
          this.finishTrip()
        }
      }
    }
  }

  /*
   * Conclude a trip by setting occupancy, door and target status
   */
  finishTrip () {
    this.setOccupied = false
    this.doorOpen = true
    this.target = null
  }
}
