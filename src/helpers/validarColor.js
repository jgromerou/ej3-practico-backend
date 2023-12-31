import { check } from 'express-validator';
import resultadoValidacion from './resultadoValidacion';

const validarColor = [
  check('nombreColor')
    .notEmpty()
    .withMessage('El nombre del color es obligatorio.')
    .isLength({
      min: 2,
      max: 100,
    })
    .withMessage('El nombre del color debe contener entre 2 y 100 caracteres')
    .matches(/^[a-zA-Z]+$/)
    .withMessage('El nombre del color debe contener sólo letras'),
  check('codigoHexadecimal')
    .isLength({
      max: 7,
    })
    .withMessage(
      'El código Hexadecimal del color no puede superar los 7 caracteres'
    )
    .custom((codigohexa = '') => {
      if (codigohexa.length > 0) {
        let patron = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (patron.test(codigohexa)) {
          return true;
        } else {
          throw new Error(
            'El código Hexadecimal debe tener un formato como #FF0000'
          );
        }
      } else {
        return true;
      }
    }),
  check('codigoRGB')
    .isLength({
      max: 16,
    })
    .withMessage('El código RGB del color no puede superar los 16 caracteres')
    .custom((codigorgb = '') => {
      if (codigorgb.length > 0) {
        let patron = /^rgb\(\s*(?:\d{1,3}\s*,\s*){2}\d{1,3}\s*\)$/;
        if (patron.test(codigorgb)) {
          return true;
        } else {
          throw new Error(
            'El código RGB ó RGBA debe tener un formato como rgb(255,0,0)'
          );
        }
      } else {
        return true;
      }
    }),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarColor;
