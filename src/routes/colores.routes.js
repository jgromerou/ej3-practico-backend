import { Router } from 'express';
import {
  controladorTest,
  crearColor,
} from '../controllers/colores.controllers';

const router = new Router();

router.route('/').get(controladorTest);
router.route('/colores').post(crearColor);

export default router;
