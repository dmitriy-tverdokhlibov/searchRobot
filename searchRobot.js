'use strict'

const robot = {
  name: 'Sundar',
};
const workPlaces = [
  {
    name: 'mate academy',
    staff: ['Roma', 'Misha', 'Yura'],
  },
  {
    name: 'Google',
    staff: ['Larry', 'Sergey', 'Sundar'],
  },
];

/**
 * @param {object} robot
 *
 * @param {object[]} workPlaces
 *
 * @returns {string}
 */

const searchRobot = (robot, workPlaces) => {
  for (let i = 0; i < workPlaces.length; i++) {
    for (let j = 0; j < workPlaces[i].staff.length; j++) {
      if (robot.name === workPlaces[i].staff[j]) {
        return workPlaces[i].name;
      }
    }
  }
};

console.log(searchRobot(robot, workPlaces));