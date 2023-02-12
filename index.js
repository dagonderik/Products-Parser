import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/ProductsRoute.js";
import cron from "node-cron";
import data from "./components/UpdateDB.js";

const app = express();
mongoose.connect(
  "mongodb+srv://testuser:testuser@cluster0.sqi1wmc.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());
app.use(router);

cron.schedule("0 2 * * 0", async () => {
  await data("https://challenges.coode.sh/food/data/json/products_01.json.gz");
  await data("https://challenges.coode.sh/food/data/json/products_02.json.gz");
  await data("https://challenges.coode.sh/food/data/json/products_03.json.gz");
  await data("https://challenges.coode.sh/food/data/json/products_04.json.gz");
  await data("https://challenges.coode.sh/food/data/json/products_05.json.gz");
  await data("https://challenges.coode.sh/food/data/json/products_06.json.gz");
  await data("https://challenges.coode.sh/food/data/json/products_07.json.gz");
  await data("https://challenges.coode.sh/food/data/json/products_08.json.gz");
  await data("https://challenges.coode.sh/food/data/json/products_09.json.gz");
});

app.listen(5000, () => console.log("Server up and running..."));
