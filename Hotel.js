class Hotel {
    #minFloor;
    #maxFloor;
  
    constructor(Address, NumberOfRooms) {
      this.Address = Address;
      this.NumberOfRooms = NumberOfRooms;
      this.#minFloor = 1;
      this.#maxFloor = 100;
      this.rooms = ["One", "Two", "Three", "Four", "Five"];
    }
  
    printAdvertisement() {
      console.log(`Hello everyone!, Welcome to ${this.Address}! We have ${this.NumberOfRooms} rooms available.`);
    }
  
    listBookedRooms() {
      const bookedRooms = this.rooms.filter(room => room.isBooked);
      console.log(`The following rooms are booked: ${bookedRooms.map(room => room.roomNum).join(', ')}`);
    }
  
    get minFloor() {
      return this.#minFloor;
    }
  
    set minFloor(num) {
      this.#minFloor = num;
    }
  
    get maxFloor() {
      return this.#maxFloor;
    }
  
    set maxFloor(num) {
      this.#maxFloor = num;
    }
  }
  
  class Room {
    #isBooked;
  
    constructor(floorNum, roomNum, price) {
      this.floorNum = floorNum;
      this.roomNum = roomNum;
      this.price = price;
      this.#isBooked = false;
    }
  
    printRoom() {
      console.log(`Room ${this.roomNum} on floor ${this.floorNum} with view ${this.view} is available  for $${this.price} per night.`);
    }
  
    book() {
      if (this.isBooked) {
        console.log(`Room ${this.roomNum} is already booked.`);
      } else {
        this.isBooked = true;
        console.log(`You have booked Room ${this.roomNum} for $${this.price} per night.`);
      }
    }
  
    get isBooked() {
      return this.#isBooked;
    }
  
    set isBooked(value) {
      this.#isBooked = value;
    }
  }
  
  class RoomWithView extends Room {
    constructor(floorNum, roomNum, price, isBooked, view, numberOfBeds) {
      super(floorNum, roomNum, price, isBooked);
      this.view = view;
      this.numberOfBeds = numberOfBeds;
    }
  }
  
  class SleepingRoom extends Room {
    constructor(floorNum, roomNum, price, isBooked, personCapacity) {
      super(floorNum, roomNum, price, isBooked);
      this.personCapacity = personCapacity;
    }
  }
  
  
  const room101 = new Room(1, '101', 50, false);
  const room102 = new Room(1, '102', 55, true);
  const room103 = new RoomWithView(1, '103', 60, false, 'ocean', 2);
  const room104 = new SleepingRoom(1, '104', 65, false, 3);
  
  const hotel = new Hotel('123 Main St', 4, 1, 2, [room101, room102, room103, room104]);
  
  hotel.printAdvertisement(); 
  hotel.listBookedRooms(); 
  
  room101.printRoom(); 
  room102.book();
  console.log(room102.isBooked()); 
  
  const room1 = new Room(2,55,200,false);
  room1.printRoom();
  console.log(room1.isBooked());
  room1.book();
  console.log(room1.Booked());
  
  const room2 = new Room(2,55,200,false);
  room2.printRoom();
  console.log(room2.isBooked());
  room2.book();
  console.log(room2.Booked());
  
  const room3 = new RoomWithView(5,10,500,true,3,"Garden");
  
  const Hotel1 = new Hotel("Ramallah" , 20 , 1 , 10 , ['One','Two','Three']);
  Hotel1.printAdverstisement();
  Hotel1.listBookedRoons();