import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [{type: mongoose.Schema.Types.ObjectId,ref: "Products"}],
    payment: {},
    buyer: {type: mongoose.Schema.Types.ObjectId,ref: "User"},
    status: {type: String,default: "Not Process",enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"]},
    date:{type:Date, default: Date.now()}
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
