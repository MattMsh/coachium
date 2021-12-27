import Router from 'express';

const router = new Router();

import {
  getAll,
  createTeam,
  updateTeam,
  addUsers
} from '../controllers/teamController';

router.get('/', getAll);
router.post('/', createTeam);
router.post('/add', addUsers);
router.patch('/:id', updateTeam);

export default router;