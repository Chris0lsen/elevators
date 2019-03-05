class ElevatorBus {
  /*
   * Initialize the store, similar to flux
   */
  //requests = [] // FIFO queue for elevator requests
  //floorStatus = {} // Keep track of direction of elevators at all floors
  //elevators = [] // All instantiated elevator objects
  /**
   * 1: [Elevators]
   *    
   *   
   *
   *
   *
   */
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
    return floor <= this.floors
  }

  /*
   * Reach up and down from the requested floor
   * to find the next unoccupied elevator
   */
  findNearestElevator (floor) {
    for (let i = 1; i < (this.floors / 2); i++) {
      
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
