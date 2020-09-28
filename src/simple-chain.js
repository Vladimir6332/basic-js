const CustomError = require('../extensions/custom-error');
const hanoiTower = require('./hanoi-tower');

const chainMaker = {
  resultArr: [],

  getLength() {
    let chainLength = this.resultArr.length;
    this.resultArr = [];
    return chainLength;
  },
  addLink(value) {
    this.resultArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position <= 0 ||
      position > this.resultArr.length
    ) {
      this.resultArr = [];
      throw new Error();
    }

    this.resultArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.resultArr.reverse();
    return this;
  },
  finishChain() {
    const result = this.resultArr.join('~~');
    this.resultArr = [];
    return result;
  },
};

module.exports = chainMaker;
