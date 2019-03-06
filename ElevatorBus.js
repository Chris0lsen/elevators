class ElevatorBus {
  constructor (elevators, floors) {
    this.floors = floors
    this.elevators = Array(elevators).fill(new Elevator()) // Fill elevators array with new elevator objects
    this.floorStatus = {
      1: this.elevators
    }
  }
  request (floor) {
    if (this.isValidRequest()) {
      // Start looking up and down from this floor and find the closest unoccupied elevator
      let nearestElevator = findNearestElevator()
      nearestElevator.answerCall(floor)
    } else {
      throw new Error(`Invalid request received: Cannot dispatch to ${floor}; Top floor is ${this.floors}`) 
    }
  }
  isValidRequest (floor) {
    return floor <= this.floors && floor > 0
  }

  /*
   * Reach up and down from the requested floor
   * to find the next unoccupied elevator
   */
  findNearestElevator (floor) {
    let nearestElevator = this.peek(floor, null) // peek at the current floor
    // Breadth-first one floor at a time
    for (let i = 1; i <= (this.floors / 2); i++) {
      nearestElevator = this.peek(floor - i, 1) // peek down
      if (!nearestElevator) nearestElevator = this.peek(floor + i, -1) // peek up
      nearestElevator.answerCall(floor)
    }
  }
  /*
   * Check the floorStatus store for elevators at the given floor
   * Direction will be 1 if we're looking below the target floor,
   *  -1 if we're looking above the target floor,
   *  and null if we're checking the current floor
   */
  peek (floor, direction) {
    // If there are any elevators at the current floor...
    if (this.floorStatus[floor]) {
      // Look for unoccupied elevators going towards the requested floor
      for (let elevator of this.floorStatus) {
        if ((!elevator.occupied 
            || (elevator.direction === direction 
                || !elevator.direction))
            && !elevator.maintenance) {
          return elevator
        }
      }
      return false
    }
  }
  /*
   * In order to simulate the passage of time,
   * the tick() method will "move" all existing
   * elevators, forcing them to update their
   * positions accordingly
   */
  tick() {
    for (let elevator of this.elevators) {
      elevator.move()
    }
  }

}
