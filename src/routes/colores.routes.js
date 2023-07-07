import { Router } from 'express';
import {
  borrarColor,
  controladorTest,
  crearColor,
  editarColor,
  obtenerColor,
  obtenerListaColores,
} from '../controllers/colores.controllers';
import { check } from 'express-validator';
import validarColor from '../helpers/validarColor';

const router = new Router();

router.route('/').get(controladorTest);
router
  .route('/colores')
  .post(validarColor, crearColor)
  .get(obtenerListaColores);
router
  .route('/colores/:id')
  .get(obtenerColor)
  .delete(borrarColor)
  .put(validarColor, editarColor);

export default router;
