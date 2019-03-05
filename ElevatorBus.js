class ElevatorBus {
  /*
   * Initialize the store, similar to flux
   */
  requests = [] // FIFO queue for elevator requests
  floorStatus = {} // 
  constructor (elevators, floors) {
    this.elevators = elevators
    this.floors = floors
  }
  request (floor) {

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
