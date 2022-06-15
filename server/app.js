const express= require("express")
const app = express()
const cors = require("cors")
const pdf = require("html-pdf")
const pdfTemplate = require("./documents")
app.use(cors())
app.use(express.json())

// post route for pdf generation

app.post("/create-pdf" , (req, res)=>{
   /* pdf.create(pdfTemplate(req.body) , {}).toFile("result.pdf", (err)=>{
       if(err){
           res.send( Promise.reject())
       }
       res.send(Promise.resolve())
   }) */

 

   console.log(req.body)
    pdf
      .create(pdfTemplate(req.body), {
        border: {
          top: "1.5cm", // default is 0, units: mm, cm, in, px
          right: "1.5cm",
          bottom: "1.5cm",
          left: "1.5cm",
        },
      })
      .toBuffer(function (err, buffer) {
        if (err) return res.send(err);
        res.type("pdf");
        res.end(buffer, "binary");
      });


})

//get route for sending pdf to client

app.get("/fetch-pdf", (req, res)=>{
    console.log("sending file bro")
    console.log(__dirname)
    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(5000, ()=>{
  console.log("listning to port 5000")
})