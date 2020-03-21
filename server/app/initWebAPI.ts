import bodyParser from 'body-parser';
import cors from 'cors';
import { Application } from 'express';
import {current, deadline, goal} from '../fundraiseConfig.json';

export default (app: Application): void => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());

    app.get('/fundingGoal', (req, res) => {
        res.json(goal);
    });

    app.get('/fundingDeadline', (req, res) => {
        res.json(deadline);
    });

    app.get('/fundingCurrent', async (req, res) => {
        res.json(current);
    });
};
