// interface model of object
interface ModelType {
  type: string;
  color: string;
  event: () => void;
}

// classes
class Vehicle {
  // properties
  modelType: ModelType;

  // this will run every time instantiate run
  constructor(model: ModelType) {
    this.modelType = model;
  }
}

let model_type = {
  type: "Car",
  color: "Blue",
  event: () => {
    console.log("Event Function");
  },
};

// instantiate
const car = new Vehicle(model_type);

console.log(car);
