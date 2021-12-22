import Router from 'express';

const router = new Router();

import {
  createTeam,
  updateTeam,
  addUsers
} from '../controllers/teamController';

router.post('/', createTeam);
router.post('/add', addUsers);
router.patch('/:id', updateTeam);

export default router;