// arguments object - no longer bound with arrow functions
const add = function(a, b) {
  console.log(arguments)
  return a + b;
};
// console.log(add(55, 1));

const addArrow = (a, b) => {
  //console.log(arguments); // no longer available
  return a + b;
}

// this keyword - no longer bound
// with es6 you can define a method as seen below. Instead of:
// printPlacesLived: function() {}

const user = {
  name: 'Andrew',
  cities: ['Philly', 'New York', 'California'],
  printPlacesLived() {
    console.log(this.name);
    console.log(this.city);

    this.cities.forEach(city => {
      console.log(this.name + ' has lived in ' + city)
    });
  }
};
// user.printPlacesLived();

const multiplier = {
  numbers: [2, 4, 6, 8],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(num => num * this.multiplyBy);
  }
};

// console.log(multiplier.multiply());