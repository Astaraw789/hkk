class Car {
  constructor(name, year) {
    this.name = neame;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 20143);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";
