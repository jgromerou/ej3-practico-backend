import mongoose, { Schema } from 'mongoose';

const colorSchema = new Schema({
  nombreColor: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 100,
  },
  codigoHexadecimal: {
    type: String,
    unique: true,
    maxLength: 10,
  },
  colorRGB: {
    type: String,
    unique: true,
    maxLength: 20,
  },
});

const Color = mongoose.model('color', colorSchema);

export default Color;
