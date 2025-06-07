import express from "express"
import mongoose from "mongoose";
import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const port = 3000
const mongoURI = "mongodb+srv://rajpurohitaaryan429:Gamer%23007@myprojects.9htqub0.mongodb.net/Company?retryWrites=true&w=majority"

mongoose.connect(mongoURI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
const userSchema = new mongoose.Schema({
  name: String,       
  salary: Number,     
  language: String,   
  city: String,       
  isManager: Boolean, 
});
const User = mongoose.model("Employees", userSchema);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.post("/submit-form", async (req, res) => {
  try {
    
    const newUser = new User({
      name: req.body.name,
      salary: Number(req.body.salary),        
      language: req.body.language,
      city: req.body.city,
      isManager: req.body.isManager === "true",  
    });

    await newUser.save();   

    res.redirect("/")  
  } catch (error) {
    res.status(500).send("Error saving data.");  
  }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
