{/*Reset
Hey candidate! Welcome to your interview. Boilerplate is provided. Feel free to change the code as you see fit. To run the code at any time, please hit the run button located in the top left corner.

Goals: Design a parking lot using object-oriented principles

Here are a few methods that you should be able to run:

Tell us how many spots are remaining
Tell us how many total spots are in the parking lot
Tell us when the parking lot is full
Tell us when the parking lot is empty
Tell us when certain spots are full e.g. when all motorcycle spots are taken
Tell us how many spots vans are taking up
Assumptions:

The parking lot can hold motorcycles, cars and vans
The parking lot has motorcycle spots, car spots and large spots
A motorcycle can park in any spot
A car can park in a single compact spot, or a regular spot
A van can park, but it will take up 3 regular spots
These are just a few assumptions. Feel free to ask your interviewer about more assumptions as needed.*/}

// coplit please solve the parking lot problem using object-oriented principles:
// 1. Create a class called ParkingLot
// 2. Create a class called ParkingSpot
// 3. Create a class called Vehicle
// 4. Create a class called Motorcycle
// 5. Create a class called Car
// 6. Create a class called Van
// 7. Create a class called ParkingLotManager
// 8. Create a class called ParkingLotFullError
// 9. Create a class called ParkingLotEmptyError

class ParkingLot {
    constructor(motorcycleSpots, compactSpots, largeSpots) {
        this.motorcycleSpots = motorcycleSpots;
        this.compactSpots = compactSpots;
        this.largeSpots = largeSpots;
        this.motorcycleSpotsTaken = 0;
        this.compactSpotsTaken = 0;
        this.largeSpotsTaken = 0;
    }
    getMotorcycleSpots() {
        return this.motorcycleSpots;
    }
    getCompactSpots() {
        return this.compactSpots;
    }
    getLargeSpots() {
        return this.largeSpots;
    }
    getMotorcycleSpotsTaken() {
        return this.motorcycleSpotsTaken;
    }
    getCompactSpotsTaken() {
        return this.compactSpotsTaken;
    }
    getLargeSpotsTaken() {
        return this.largeSpotsTaken;
    }
    getMotorcycleSpotsRemaining() {
        return this.motorcycleSpots - this.motorcycleSpotsTaken;
    }
    getCompactSpotsRemaining() {
        return this.compactSpots - this.compactSpotsTaken;
    }
    getLargeSpotsRemaining() {
        return this.largeSpots - this.largeSpotsTaken;
    }
    getTotalSpots() {
        return this.motorcycleSpots + this.compactSpots + this.largeSpots;
    }
    getTotalSpotsTaken() {
        return this.motorcycleSpotsTaken + this.compactSpotsTaken + this.largeSpotsTaken;
    }
    getTotalSpotsRemaining() {
        return this.getTotalSpots() - this.getTotalSpotsTaken();
    }
    getTotalSpotsRemainingPercentage() {
        return (this.getTotalSpotsRemaining() / this.getTotalSpots()) * 100;
    }
}
class ParkingSpot {
    constructor(type, isTaken) {
        this.type = type;
        this.isTaken = isTaken;
    }
    getType() {
        return this.type;
    }
    getIsTaken() {
        return this.isTaken;
    }
    setIsTaken(isTaken) {
        this.isTaken = isTaken;
    }
}

class Vehicle {
    constructor(licensePlate) {
        this.licensePlate = licensePlate;
    }
    getLicensePlate() {
        return this.licensePlate;
    }
}

class Motorcycle extends Vehicle {
    constructor(licensePlate) {
        super(licensePlate);
    }
}




