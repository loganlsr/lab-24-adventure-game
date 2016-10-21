'use strict';

//npm modules
require('./scss/main.scss');
// require in angular
const angular = require('angular');

// require in angular modules
angular.module('ngAdventure', []);

//services
require('./service/map-service.js');
require('./service/player-service.js');

//components
require('./component/game-pad/game-pad.js');
require('./component/player-info/player-info.js');
require('./component/game-history/game-history.js');

// create our angular module

//require controllers
//requre services
