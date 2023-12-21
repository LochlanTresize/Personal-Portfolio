const express = require('express')
const app = express()

//set view engine
app.set('view engine', 'ejs')



app.get('/', (req, res) => {
    res.render('../../frontend/portfoliopage')
})



app.listen(3000)