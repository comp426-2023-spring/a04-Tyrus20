import minimist from 'minimist';
import express from 'express';
import {rps} from './lib/rpsls.js';
import {rpsls} from './lib/rpsls.js';

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;
const app = express();

app.length('*', (req, res) => {
    res.status(404).send('404 NOT FOUND');
})