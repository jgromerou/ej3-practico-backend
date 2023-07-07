import { Router } from 'express';
import { controladorTest } from '../controllers/colores.controllers';

const router = new Router();

router.route('/').get(controladorTest);

export default router;
