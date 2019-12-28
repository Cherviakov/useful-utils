const crypto = require('crypto');

const alphabet = Array.from({ length: 74 }, (item, index) => String.fromCharCode(48 + index)).filter((c) => /[0-9a-zA-Z]/.test(c));

const generateId = () => {
  return Array.from({ length: 16 }, () => {
    const numeral = parseInt(crypto.randomBytes(1).toString('hex'), 16) % alphabet.length;
    return alphabet[numeral];
  }).join('');
};
