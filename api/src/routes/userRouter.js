import Router from 'express';

const router = new Router();
import {
  loginUser,
  createUser,
  updateUser
} from '../controllers/userController';

router.post('/login', loginUser);
router.post('/', createUser);
router.patch('/', updateUser);

export default router;
