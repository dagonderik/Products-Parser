import axios from "axios";
import zlib from "zlib";
import { Readable } from "stream";
import insertNewDocument from "./InsertNewDocument.js";

const data = async () => {
  const response = await axios.get(
    "https://challenges.coode.sh/food/data/json/products_01.json.gz",
    {
      responseType: "arraybuffer",
    }
  );

  const stream = Readable.from(response.data).pipe(zlib.createGunzip());

  let counter = 0;
  let dataString = "";

  stream
    .on("data", async (chunk) => {
      if (counter > 40) {
        stream.destroy();
        insertNewDocument(dataString);
      }
      dataString = dataString + chunk.toString();
      counter++;
    })
    .on("end", () => {
      console.log("finished");
    });
};

export default data;
