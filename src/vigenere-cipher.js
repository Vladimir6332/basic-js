const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this._typeOfMachine = isDirect ? 'direct' : 'reverse';
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }

  encrypt(str, key) {
    const strArr = str.split('');
    const keyArr = key.split('');
    let counter = 0;

    const result = strArr.reduce((acc, val, index) => {
      if (!/[A-Z]/.test(val.toUpperCase())) {
        counter++;
        acc.push(val);
        return acc;
      }

      const indexCharFromKey = (index - counter) % keyArr.length;
      const codeCharFromKey = keyArr[indexCharFromKey]
        .toUpperCase()
        .charCodeAt(0);
      const codeCurrentChar = val.toUpperCase().charCodeAt(0);

      const deltaPositionFromStartAlphabet =
        codeCurrentChar - 'A'.charCodeAt(0);
      const deltaPositionFromStartAlphabetKey =
        codeCharFromKey - 'A'.charCodeAt(0);
      const newChar = this.alphabet[
        (deltaPositionFromStartAlphabetKey + deltaPositionFromStartAlphabet) %
          this.alphabet.length
      ];
      console.log(val.toUpperCase().charCodeAt(0));

      acc.push(newChar);
      return acc;
    }, []);

    if (this._typeOfMachine === 'direct') return result.join('');
    else if (this._typeOfMachine === 'reverse')
      return result.reverse().join('');
  }

  decrypt(str, key) {
    const strArr = str.split('');
    const keyArr = key.split('');
    let counter = 0;

    const result = strArr.reduce((acc, val, index) => {
      if (!/[A-Z]/.test(val.toUpperCase())) {
        counter++;
        acc.push(val);
        return acc;
      }

      const indexCharFromKey = (index - counter) % keyArr.length;
      const codeCharFromKey = keyArr[indexCharFromKey]
        .toUpperCase()
        .charCodeAt(0);
      const codeCurrentChar = val.toUpperCase().charCodeAt(0);

      const deltaPositionFromStartAlphabet =
        codeCurrentChar - 'A'.charCodeAt(0);
      const deltaPositionFromStartAlphabetKey =
        codeCharFromKey - 'A'.charCodeAt(0);
      const newChar = this.alphabet[
        (deltaPositionFromStartAlphabet -
          deltaPositionFromStartAlphabetKey +
          this.alphabet.length) %
          this.alphabet.length
      ];
      acc.push(newChar);
      return acc;
    }, []);

    if (this._typeOfMachine === 'direct') return result.join('');
    else if (this._typeOfMachine === 'reverse')
      return result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
