/* eslint no-unused-vars: 0 */
import {
  oneSecond,
  getCurrentTime,
  abstractClockTime,
  civilianHours,
  appendAmPm,
  formatClock,
  prependZero,
  convertToCivilianTime,
  doubleDigits,
  getClockTime,
  log,
} from './clock';

describe('clock', () => {
  const time = {
    hours: 1,
    minutes: 12,
    seconds: 3,
    ampm: 'PM',
  };

  describe('tests', () => {
    it('oneSecond === 1000', () => {
      expect(oneSecond()).to.equal(1000);
    });

    it('getCurrentTime === a date', () => {
      expect(getCurrentTime()).to.a('Date');
    });

    it('abstractClockTime returns a date object', () => {
      const act = abstractClockTime(getCurrentTime());

      expect(act).to.have.keys('hours', 'minutes', 'seconds');
    });

    it('civilianHours', () => {
      expect(civilianHours(time)).to.deep.equal({
        ampm: 'PM',
        hours: 1,
        minutes: 12,
        seconds: 3,
      });
    });

    it('appendAmPm', () => {
      expect(appendAmPm(time)).to.deep.equal({
        ampm: 'AM',
        hours: 1,
        minutes: 12,
        seconds: 3,
      });
    });

    it('formatClock', () => {
      expect(formatClock('hh:mm:ss ampm')(time)).to.equal('1:12:3 PM');
    });

    it('prependZero', () => {
      expect(prependZero('seconds')(time)).to.deep.equal({
        ampm: 'PM',
        hours: 1,
        minutes: 12,
        seconds: '03',
      });
    });

    it('convertToCivilianTime', () => {
      expect(convertToCivilianTime(time)).to.deep.equal({
        ampm: 'AM',
        hours: 1,
        minutes: 12,
        seconds: 3,
      });
    });

    it('doubleDigits', () => {
      expect(doubleDigits(time)).to.deep.equal({
        ampm: 'PM',
        hours: '01',
        minutes: 12,
        seconds: '03',
      });
    });

    it('getClockTime', () => {
      const res = getClockTime();

      log(res);
      expect(res).to.be.a('string');
    });
  });
});
