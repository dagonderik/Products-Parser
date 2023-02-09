import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express();
mongoose.connect('mongodb+srv://testuser:testuser@cluster0.sqi1wmc.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());


app.listen(5000, ()=> console.log('Server up and running...')); 