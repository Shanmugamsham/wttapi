const express = require('express');
const { PlayerDetails, SinglePlayerDetails } = require('../components/PlayersComponent');
const { ScheduleDetails, SchedulePlayerDetails } = require('../components/ScheduleComponent');
const { EventDetails } = require('../components/EventNews');
const { LiveDetails } = require('../components/LivescoreComponet');
const router = express.Router();


// PlayerRoutrs



router.get('/players',PlayerDetails);
 router.get('/players/:id',SinglePlayerDetails);


// ScheduleRoutes

router.get('/Schedule',ScheduleDetails);
 router.get('/Schedule/:id',SchedulePlayerDetails);


 router.get('/events',EventDetails);
 router.get('/liveScore',LiveDetails);



module.exports=router