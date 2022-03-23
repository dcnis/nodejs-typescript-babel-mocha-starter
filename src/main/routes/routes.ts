import { Router } from 'express';
import HomeControllerFactory from 'factory/homeController.factory';
import AdminControllerFactory from 'factory/adminController.factory';

const router = Router();
const homeController = HomeControllerFactory.createHomeController();
const adminController = AdminControllerFactory.createAdminController();

router.use("/admin", adminController.getAdmin);

router.use("/:number", homeController.getHomepage);

export default router;
