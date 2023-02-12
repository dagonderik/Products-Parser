import findSubstring from "./FindSubstring.js";
import axios from "axios";

const insertNewDocument = async (dataString) => {
  let newDocument = "";
  let manipulatedString = dataString;
  let counter = 0;

  while (findSubstring(manipulatedString) && counter < 100) {
    newDocument = findSubstring(manipulatedString);
    console.log(`Object ${counter}`);
    console.log("");
    if (newDocument.slice(0, 1) == "{") {
      const product = JSON.parse(newDocument);
      console.log(newDocument);
      await axios.put(
        `http://localhost:5000/products/${product.code}`,
        product
      );
      counter++;
    }
    manipulatedString = manipulatedString.slice(newDocument.length);
  }
};

export default insertNewDocument;
