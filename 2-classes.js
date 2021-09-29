//ES6 way
class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super(); // calling parent constructor
    this.name = "Alvaro";
  }
  printMyName() {
    console.log(this.name);
  }
}
//----------------------------------------------
//ES7 way
class HumanEs7 {
  gender = "male";
  printGenderEs7 = () => {
    console.log(this.gender);
  };
}

class PersonEs7 extends HumanEs7 {
  name = "Alvaro";
  gender = "female";

  printMyNameEs7 = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();

const personEs7 = new PersonEs7();

personEs7.printGenderEs7();
personEs7.printMyNameEs7();
