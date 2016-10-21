'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService){
  $log.debug('init playerService');

  //setup service
  let service = {};
  //add features to service
  let turn = 0;
  let player = service.player = {
    name: 'logan',
    location: 'A',
    hp: 100,
  };

  let history = service.history = [
    {
      turn,
      location: 'A',
      desc: 'Welcome to the game.',
      hp: player.hp,
    }
  ];

  service.movePlayer = function(direction){
    return new $q((resolve, reject) => {
      turn++;
      let currentLocation = player.location;
      let newLocation = mapService.mapData[currentLocation][direction];
      if(!newLocation) {
        history.unshift({
          turn,
          desc: 'You hit a wall.',
          location: player.location,
          hp: player.hp,
        });
        return reject('No room in that direction!');
      }
      history.unshift({
        turn,
        location: newLocation,
        desc: mapService.mapData[newLocation].desc,
        hp: player.hp,
      });
      player.location = newLocation;
      return resolve(player.location);
    });
  };
  //return service
  return service;
}
