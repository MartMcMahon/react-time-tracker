export class store {
  constructor() {
    this.testVal = 10;
  }

  static getTest() {
    console.log('getting');
    return this.testVal;
  }

  static setTest(newVal) {
    console.log('setting testVal to ' + newVal);
    this.testVal = newVal;
  }
}
