import express from "express"
import superheroes from "superheroes"
import bodyParser from "body-parser";
const app = express()
const PORT = 3000;



app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    const name = superheroes.random();
    res.render('index.ejs', {
        name: name
    })
})







app.listen(PORT,  ()=>{
    console.log(`Server running on port ${PORT}`)
})