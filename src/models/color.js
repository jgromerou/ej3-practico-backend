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
    maxLength: 10,
  },
  codigoRGB: {
    type: String,
    maxLength: 16,
  },
});

const Color = mongoose.model('color', colorSchema);

export default Color;
