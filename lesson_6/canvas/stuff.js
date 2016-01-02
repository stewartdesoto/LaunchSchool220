function Vehicle() {

}
Vehicle.prototype.speak = function() {
  console.log("I am a vehicle");
  doors: 4;
  wheels: 4;
}



function Motorcycle() {
  this.wheels = 2;
}

Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.vroom = function() {
  console.log("I am a motorcycle");
}

var sedan = new Vehicle();
console.log(sedan);
sedan.doors = 2;
console.log(sedan.hasOwnProperty("doors"));

var motor = new Motorcycle();
motor.vroom();
motor.speak();

console.log(motor.wheels);
console.log(sedan instanceof Motorcycle);
