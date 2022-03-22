import { Router } from 'express';
import adminController from '../controller/admin.controller';
import homeController from '../controller/home.controller';

const router = Router();

router.use("/admin", adminController.getAdmin);

router.use("/", homeController.getHomepage);

export default router;
