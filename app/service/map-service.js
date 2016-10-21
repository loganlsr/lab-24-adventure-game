'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log){
  $log.debug('init mapService');
  //set up service
  let service = {};
  //add features to service
  service.mapData = {
    A: {
      desc: 'You are in room A. There are two possible paths leaving this room. The lights are dim. Good luck.',
      south: 'C',
      east: 'B',
    },
    B: {
      desc: 'You are in room B. Again,there are two possible paths leaving this room. The lights flicker. Be wary.',
      west: 'A',
      south: 'D',
      east: 'E',
    },
    C: {
      desc: 'You are in room C. In this room as well, there are two possible paths to leave this room. The lights give good vision, but you hear scratching.',
      north: 'A',
      east: 'D',
    },
    D: {
      desc: 'You are in room D. Something seems different about this room. Maybe there are more than two possible paths to leave this room. The room is pitch black, though.',
      items: ['lamp'],
      north: 'B',
      west: 'C',
      south: 'X',
    },
    X: {
      desc: 'It\'s a trap! The floorboards are dropping! Is there a way out of the room?!',
      south: 'X',
      north: 'X',
      east: 'X',
      west: 'A',
    },
    E: {
      desc: 'You enter what looks like a hallway. It\'s adorned with portraits of former masters of the house.',
      south: 'X',
      north: 'X',
      east: 'F',
      west: 'B',
    },
    F: {
      desc: 'As you walk down the hallway, you notice that the floor and furniture lining the hall are covered in a thick layer of dust, giving off the feeling that it had been unused for a long time.',
      south: 'X',
      north: 'X',
      east: 'G',
      west: 'E',
    },
    G: {
      desc: 'You approach the end of the hall and see a heavy looking ornate door. The hinges are rusted and the doorknob lookes loose',
      south: 'X',
      north: 'X',
      east: 'H',
      west: 'E',
    },
    H: {
      desc: 'You have entered what appears to be a trophy room of sorts, filled with expensive looking antiques and treasures.',
      south: 'J',
      north: 'X',
      east: 'I',
      west: 'G',
    },
    I: {
      desc: 'In the corner, you find a large statue seeminly coated in gold. The statue depicts a man in full armor holding a sword in front of him, pointing towards the adjacent side of the room.',
      south: 'K',
      north: 'X',
      east: 'X',
      west: 'H',
    },
    J: {
      desc: 'The walls of this part of the room are coverd with shelves of books. Most seem like some sort of encyclopedia, but one books seems to stand out.',
      south: 'L',
      north: 'H',
      east: 'K',
      west: 'X',
    },
    K: {
      desc: 'In this portion of the room you find a replica of Excalibur embedded in rock. You attempt to pull it from the rock, but it won\'t budge.',
      south: 'X',
      north: 'I',
      east: 'X',
      west: 'J',
    },
    L: {
      desc: 'The bookcase slides into the wall. You enter a short hallway.',
      south: 'N',
      north: 'J',
      east: 'X',
      west: 'X',
    },
    M: {
      desc: 'It\'s a trap room! The door slams behind you and the walls begin closing in on you! There is no way out. GAME OVER.',
      south: 'X',
      north: 'X',
      east: 'X',
      west: 'X',
    },
    N: {
      desc: 'At the end of this small hallway, there are two doors. One to the East, one to the west.',
      south: 'X',
      north: 'L',
      east: 'O',
      west: 'M',
    },
    O: {
      desc: 'Going through this door leads you to a staircase heading down to the basement. The door is currently locked. MORE COMING LATER.',
      south: 'X',
      north: 'X',
      east: 'X',
      west: 'N',
    },
  };
  //return service
  return service;
}
