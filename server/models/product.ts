import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    productType: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    currentPrice: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
    },
    imgUrl: {
      type: String,
    },
    imgFileName: {
      type: String,
    },
    stars:{
      type: Object,
      default: {
        "63dfde1e45d80b1705fc47cd" : 4
      }
    },
    comments:[
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ],
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  }
);

export default model("Product", productSchema);
// {// Schema.Types.Mixed
//   "_id": ObjectId("53ccff9bbb25567911f208a8"),

//   "tags": {
//     "53ccff9bbb25567911f208a4": "tag1",
//     "53ccff9bbb25567911f208a5": "tag2",
//     "53ccff9bbb25567911f208a6": "tag3"
//   }
// }
// This will remove the "53ccff9bbb25567911f208a6": "tag3" entry from tags.
// collection.update(
//   {"_id": ObjectId("53ccff9bbb25567911f208a8")},
//   {"$unset": {"tags.53ccff9bbb25567911f208a6": ""}}
// )