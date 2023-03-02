import { model, Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Cart'
    }
  ],
  SaveForLater: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Cart'
    }
  ],
});
export default  model('User', userSchema);
