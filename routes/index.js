const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{

//    res.send('Hello world !')  //slanje nekog teksta
    res.render('index')
})


module.exports = router