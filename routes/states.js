let express = require('express')
let States = require('../models').States

let router = express.Router()

// gets all the states
router.get('/states', function(req, res, next){
    States.findAll({ order: ['name']}).then( states =>{
        return res.json(states)
    }).catch(err => next(err))
})
// gets all the info about one state
router.get('/state/:name', function(req, res, name){
    let stateName =req.params.name
    States.findOne( {where: {name: stateName}})
    .then(state =>{
        if (state){
            return res.json(state)
        }else{
            return res.status(404).send('State not found')
        }
    }).catch(err => next(err))
})

// gets states by state name 
router.patch('/states/:name', function(req, res, next){
    // sets variable to state name put in
    let stateName = req.params.name
    let stateVisited = req.body.visited
    // updates visited status
    States.update( {visited: stateVisited}, {where:{ name: stateName }})
    .then(rowsUpdated => {
        let numberOfRowsUpdated = rowsUpdated[0]
        if (numberOfRowsUpdated ==1){
            return res.send('ok')
        }
        return res.status(404).send('State not found')
    }).catch(err => next)
})

module.exports = router