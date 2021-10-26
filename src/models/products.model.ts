import { model, Schema, Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Product } from '@interfaces/product.interface';

const productSchema: Schema = new Schema({
  tag: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  idEmpresa: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  numberTags: {
    type: Number,
    required: true,
  },
  tags: [{ link: String, name: String }],
  images: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

const productModel = model<Product & Document>('Product', productSchema);

export default productModel;
