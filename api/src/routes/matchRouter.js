import Router from 'express';

const router = new Router();

import {
  createMatch
} from '../controllers/matchController';

router.post('/', createMatch);

export default router;