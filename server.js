import minimist from 'minimist';
import express from 'express';
import {rps} from './lib/rpsls.js';
import {rpsls} from './lib/rpsls.js';

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;
const app = express();

app.get('/app', (req, res) => {
    res.status(200).send("200 OK");
});

app.get('/app/rps', (req, res) => {
    res.status(200).send(rps());
});

app.get('/app/rpsls', (req, res) => {
    res.status(200).send(rpsls());
});

app.get('/app/rps/play', (req, res) => {
    res.status(200).send(rps(req.query.shot));
});

app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.query.shot));
});

app.post('/app/rps/play', (req, res) => {
    res.status(200).send(rps(req.body.shot));
});

app.post('/app/rpsls/play', (req, res) => {
    res.status(200).send(rps(req.body.shot));
});

app.get('/app/rps/play/:shot/', (req, res) => {
    res.status(200).send(rps(req.params.shot));
});

app.get('/app/rpsls/play/:shot/', (req, res) => {
    res.status(200).send(rpsls(req.params.shot));
});

app.get('*', (req, res) => {
    res.status(404).send('404 NOT FOUND');
});