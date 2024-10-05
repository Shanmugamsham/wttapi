const express = require('express');
const { PlayerDetails, SinglePlayerDetails } = require('../components/PlayersComponent');
const { ScheduleDetails, SchedulePlayerDetails } = require('../components/ScheduleComponent');
const { EventDetails } = require('../components/EventNews');
const { LiveDetails } = require('../components/LivescoreComponet');
const router = express.Router();

/**
 * @swagger
 * /api/players:
 *   get:
 *     summary: Get all players
 *     description: Retrieve a list of all players.
 *     responses:
 *       200:
 *         description: A list of players.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/players', PlayerDetails);

/**
 * @swagger
 * /api/players/{id}:
 *   get:
 *     summary: Get player by ID
 *     description: Retrieve details of a single player by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The player's ID.
 *     responses:
 *       200:
 *         description: A single player's data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/players/:id', SinglePlayerDetails);

/**
 * @swagger
 * /api/Schedule:
 *   get:
 *     summary: Get all schedules
 *     description: Retrieve all scheduled events.
 *     responses:
 *       200:
 *         description: A list of schedules.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/Schedule', ScheduleDetails);

/**
 * @swagger
 * /api/Schedule/{id}:
 *   get:
 *     summary: Get schedule by player ID
 *     description: Retrieve details of a specific schedule by player ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The player ID.
 *     responses:
 *       200:
 *         description: A single schedule's data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/Schedule/:id', SchedulePlayerDetails);

/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: Get all events
 *     description: Retrieve all event news.
 *     responses:
 *       200:
 *         description: A list of events.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/events', EventDetails);

/**
 * @swagger
 * /api/liveScore:
 *   get:
 *     summary: Get live scores
 *     description: Retrieve live scores for events.
 *     responses:
 *       200:
 *         description: A list of live scores.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/liveScore', LiveDetails);

module.exports = router;
