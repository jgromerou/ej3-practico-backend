import { Router } from 'express';
import {
  borrarColor,
  crearColor,
  editarColor,
  obtenerColor,
  obtenerListaColores,
} from '../controllers/colores.controllers';
import validarColor from '../helpers/validarColor';

const router = new Router();

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
