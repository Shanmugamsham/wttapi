
const express = require("express");
const routes=require("./routes/routes")
const cors=require("cors")
const app = express();


const port = 3000


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json()); 
app.use("/api",routes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });