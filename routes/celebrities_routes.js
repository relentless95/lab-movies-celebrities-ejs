// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
// importing model
const celebMod = require('../models/Celebrity.model')
// all your routes here
// using the router.get
router.get('/', async(req, res)=>{
    res.render('celebrities/celebrities')
}
)



router.get("/create", async (req, res) => {
  try {
    console.log('celebrities route is working')
    res.render("celebrities/new-celebrity.ejs");
  } catch (error) {
    console.log("there was an error with your route");
  }
});

router.post("/create", async(req, res)=>{
    try{
        const body= req.body
        const createdCeleb = await celebMod.create({...body})
    
        res.redirect('/celebs')
    } catch (error){
        console.log("there was an error in the post", error)
    }

})

router.get('/celebs', async(req, res)=>{
    const findCelebs = celebMod.find()
    res.render('')
})



module.exports = router;
