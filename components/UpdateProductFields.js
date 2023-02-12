import ProductsModel from "../models/ProductsModel.js";

const updateProductFields = async (newProduct, existingProduct) => {
  await ProductsModel.updateOne({ code: existingProduct.code }, { $set: {
    url: newProduct.url,
    creator: newProduct.creator,
    created_t: newProduct.created_t,
    last_modified_t: newProduct.last_modified_t,
    product_name: newProduct.product_name,
    quantity: newProduct.quantity,
    brands: newProduct.brands,
    categories: newProduct.categories,
    labels: newProduct.labels,
    cities: newProduct.cities,
    purchase_places: newProduct.purchase_places,
    stores: newProduct.stores,
    ingredients_text: newProduct.ingredients_text,
    traces: newProduct.traces,
    serving_size: newProduct.serving_size,
    serving_quantity: newProduct.serving_quantity,
    nutriscore_score: newProduct.nutriscore_score,
    nutriscore_grade: newProduct.nutriscore_grade,
    main_category: newProduct.main_category,
    image_url: newProduct.image_url,
  } });
};

export default updateProductFields;
