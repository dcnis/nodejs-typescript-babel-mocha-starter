import { Router } from 'express';
import authRouter from './auth';
import homeRouter from './home';

const router = Router();

router.use("/auth", authRouter);
router.use("/", homeRouter);

export default router;
