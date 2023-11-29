import mongoose from "mongoose";

const dataSchema = await mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  sold: {
    type: Boolean,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  dateOfSale: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
});

export const DataModel = mongoose.model("values", dataSchema);
