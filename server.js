let express = require('express')
let states_api = require('./routes/states')

let app = express()

app.use(express.json())


//the route is /api, it transfers to states_api
app.use('/api', states_api)
app.use(function(req, res, next){
    res.status(404).send('Not found')
})
app.use(function(err, req, res, next){
    console.log(err)
    res.status(500).send('Server error')
})

let server = app.listen(process.env.PORT || 3000, function(){
    console.log('Server running on port', server.address().port)
})