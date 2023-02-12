import mongoose from "mongoose";

const Product = mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: false,
  },
  imported_t: {
    type: Date,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
  creator: {
    type: String,
    required: false,
  },
  created_t: {
    type: Date,
    required: false,
  },
  last_modified_t: {
    type: String,
    required: false,
  },
  product_name: {
    type: String,
    required: false,
  },
  quantity: {
    type: String,
    required: false,
  },
  brands: {
    type: String,
    required: false,
  },
  categories: {
    type: String,
    required: false,
  },
  labels: {
    type: String,
    required: false,
  },
  cities: {
    type: String,
    required: false,
  },
  purchase_places: {
    type: String,
    required: false,
  },
  stores: {
    type: String,
    required: false,
  },
  ingredients_text: {
    type: String,
    required: false,
  },
  traces: {
    type: String,
    required: false,
  },
  serving_size: {
    type: String,
    required: false,
  },
  serving_quantity: {
    type: String,
    required: false,
  },
  nutriscore_score: {
    type: String,
    required: false,
  },
  nutriscore_grade: {
    type: String,
    required: false,
  },
  main_category: {
    type: String,
    required: false,
  },
  image_url: {
    type: String,
    required: false,
  },
});

export default mongoose.model("Products", Product);
