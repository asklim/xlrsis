
import { default as HTTP } from '../helpers/http-response-codes';

import express, {
    Request,
    Response
} from 'express';

const router = express.Router();

/* GET home page. */
router.get('/',
    (_req: Request, res: Response) => res.
        status( HTTP.OK ).
        json({ message: 'Root-route in index-router.' })
        // render('index', { title: 'Express' })
);

router.get('/*',
    (_req: Request, res: Response) => res.
        status( HTTP.BAD_REQUEST ).
        json({ message: 'Bad request in index-router.' })
);

export default router;
