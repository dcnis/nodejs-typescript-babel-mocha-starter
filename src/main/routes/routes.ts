import { Router } from 'express';
import HomeController from '../controller/home.controller';
import homeService from '../services/home.service';
import adminService from '../services/admin.service';
import AdminController from '../controller/admin.controller';
import HomeService from '../services/home.service';
import AdminService from '../services/admin.service';

const router = Router();
const homeController = new HomeController(new HomeService());
const adminController = new AdminController(new AdminService());

router.use("/admin", adminController.getAdmin);

router.use("/", homeController.getHomepage);

export default router;
