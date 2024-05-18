
import { default as HTTP } from '../helpers/http-response-codes';

import express, {
    Request,
    Response
} from 'express';

const router = express.Router();

import { default as addHealthRoutes } from './v1/health/health-router';

(async () => {
    await addHealthRoutes( router );
})();

router.get('/*',
    (_req: Request, res: Response) => res.
        status( HTTP.BAD_REQUEST ).
        json({ message: "Bad request in api-v1-router." })
);

export default router;
