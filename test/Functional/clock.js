/* eslint no-console: 0 */
import { compose } from './funcs';

export const oneSecond = () => 1000;
export const getCurrentTime = () => new Date();
export const clear = () => console.clear();
export const log = message => console.log(message);
export const display = target => time => target(time);

export const abstractClockTime = date => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
});

export const civilianHours = clockTime => {
  const ret = {};
  const correctHours = {
    hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
  };

  Object.assign(ret, clockTime);
  Object.assign(ret, correctHours);

  return ret;
};

export const appendAmPm = clockTime => {
  const ret = {};
  const ampm = {
    ampm: clockTime.hours >= 12 ? 'PM' : 'AM',
  };

  Object.assign(ret, clockTime);
  Object.assign(ret, ampm);

  return ret;
};

export const formatClock = format => time =>
  format
    .replace('hh', time.hours)
    .replace('mm', time.minutes)
    .replace('ss', time.seconds)
    .replace('ampm', time.ampm);

export const prependZero = key => clockTime => {
  const ret = {};
  const addZero = {
    [key]: clockTime[key] < 10 ? `0${clockTime[key]}` : clockTime[key],
  };

  Object.assign(ret, clockTime);
  Object.assign(ret, addZero);

  return ret;
};

export const convertToCivilianTime = clockTime => compose(appendAmPm, civilianHours)(clockTime);

export const doubleDigits = civilianTime => compose(
    prependZero('hours'),
    prependZero('minutes'),
    prependZero('seconds')
)(civilianTime);

export const getClockTime =
  compose(getCurrentTime, abstractClockTime, convertToCivilianTime, doubleDigits, formatClock('hh:mm:ss ampm'));
