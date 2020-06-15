class BaseGenerator {
  constructor() {
    this.alphabet =
      '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
  }

  randomInteger(range = 10000) {
    return Math.floor(Math.random() * range);
  }

  randomFloat(rangeMin = 0, rangeMax = 10000, precision = 2) {
    return (Math.random() * (rangeMax - rangeMin) + rangeMin).toFixed(
      precision
    );
  }

  randomString(length = 17) {
    let result = '';
    for (let x = 0; x < length; x++) {
      result += this.alphabet.charAt(
        this.randomInteger() % this.alphabet.length
      );
    }
    return result;
  }

  randomNumberString(range = 10000) {
    return this.randomInteger(range).toString();
  }

  randomDate({
    year,
    month,
    date,
    hours,
    minutes,
    seconds,
    milliseconds
  } = {}) {
    const currentDate = new Date();
    const yearV =
      (typeof year === 'number'
        ? year
        : this.randomInteger() % currentDate.getFullYear()) % 10000;
    const monthV =
      (typeof month === 'number' ? month : this.randomInteger()) % 12;
    const dateV =
      (typeof date === 'number' ? month : this.randomInteger()) % 31;
    const hoursV =
      (typeof hours === 'number' ? hours : this.randomInteger()) % 24;
    const minutesV =
      (typeof minutes === 'number' ? minutes : this.randomInteger()) % 60;
    const secondsV =
      (typeof seconds === 'number' ? seconds : this.randomInteger()) % 60;
    const millisecondsV =
      (typeof milliseconds === 'number' ? milliseconds : this.randomInteger()) %
      1000;
    return new Date(
      yearV,
      monthV,
      dateV,
      hoursV,
      minutesV,
      secondsV,
      millisecondsV
    );
  }

  randomEnum(values = []) {
    const index = this.randomInteger(values.length);
    return values[index];
  }

  randomKey({ base, number } = {}) {
    const keyBase = base ? base : this.randomString(3);
    const keyNumber = number ? number : this.randomInteger();
    return `${keyBase}-${keyNumber}`;
  }

  randomStringArray(arrayLength = 5, stringLength) {
    const result = [];
    for (let i = 0, count = arrayLength; i < count; i++) {
      result.push(this.randomString(stringLength));
    }
    return result;
  }

  randomFillValuesArray(values) {
    const result = [];
    for (let i = 0, count = values.length; i < count; i++) {
      result.push(values[this.randomInteger(count)]);
    }
    return result;
  }
}

module.exports = BaseGenerator;
