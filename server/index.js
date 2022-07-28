
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


app.get('/', (req,res,next) => {
    try {
        res.send('working')
    } 
    
    catch(err) {
        next(err)
    }
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});