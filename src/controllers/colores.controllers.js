import { validationResult } from 'express-validator';
import Color from '../models/color';

export const controladorTest = (req, res) => {
  res.send('Este es un test de mi ruta GET de raíz');
};

export const crearColor = async (req, res) => {
  try {
    //trabajar con los resultados de la validación
    const errors = validationResult(req);

    //errors.isEmpty(); true: si está vacío, es false tiene errores
    //quiero saber si hay errores
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { nombreColor } = req.body;

    //verificar si el color ya existe
    let color = await Color.findOne({
      nombreColor: { $regex: nombreColor, $options: 'i' },
    }); //devuelve un null
    console.log(color);
    if (color) {
      //si el color existe
      return res.status(400).json({
        mensaje: 'ya existe una color con el correo enviado',
      });
    }

    //guardamos el nuevo color en la BD
    color = new Color(req.body);
    await color.save();
    res.status(201).json({
      mensaje: 'color creado',
      nombreColor: color.nombreColor,
      colorHexadecimal: color.codigoHexadecimal,
      colorRGB: color.colorRGB,
      uid: color._id,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al intentar crear una tarea',
    });
  }
};
