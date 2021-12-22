import Router from 'express';
import statusCode from 'http-status';

const router = new Router();
import userRouter from './userRouter';
import teamRouter from './teamRouter';
import matchRouter from './matchRouter';

router.use('/team', teamRouter);
router.use('/user', userRouter);
router.use('/match', matchRouter);
router.use('/*', (req, res) => {
    res.status(statusCode.BAD_GATEWAY);
});

export default router;
