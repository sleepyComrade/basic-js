const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool) {
    this.bool = bool;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }
  encrypt(message, key) {
    if (arguments.length < 2 || message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let msg = message.toUpperCase();
    let finalMsg = '';
    let k = this.generateKey(message, key);
    let add = 0;

    finalMsg = this.getOutput(msg, finalMsg, k, add, true);
    return this.bool === false ? finalMsg.split('').reverse().join('') : finalMsg;
  }

  decrypt(encryptedMessage, key) {
    if (arguments.length < 2 || encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let msg = encryptedMessage.toUpperCase();
    let finalMsg = '';
    let k = this.generateKey(encryptedMessage, key);
    let add = 0;
    
    finalMsg = this.getOutput(msg, finalMsg, k, add, false);
    return this.bool === false ? finalMsg.split('').reverse().join('') : finalMsg;
  }

  generateKey(message, key) {
    let k = '';
    if (message.length > key.length) {
      let t = Math.floor(message.length / key.length) + 1;
      for (let i = 0; i < t; i++) {
        k += key;
      }
    } else k += key;
    return k.toUpperCase();
  }

  getOutput(msg, finalMsg, k, add, bool) {
    msg.toUpperCase().split('').forEach((el, i) => {
      if (this.alphabet.indexOf(el) >= 0) {
        let j;
        if (bool) {
          j = (this.alphabet.indexOf(el) + this.alphabet.indexOf(k[i - add])) % 26;
        } else {
          j = (this.alphabet.indexOf(el) - this.alphabet.indexOf(k[i - add])) % 26;
          if (j < 0) j = j + 26;
        }
        finalMsg += this.alphabet[j];
      } else {
        finalMsg += el;
        add++;
      }
    })
    return finalMsg;
  }
}

module.exports = {
  VigenereCipheringMachine
};
