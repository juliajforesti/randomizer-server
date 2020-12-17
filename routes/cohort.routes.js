const router = require('express').Router()
const Cohort = require('../models/Cohort')

// CREATE COHORT: POST
router.post('/cohort-create', async (req, res) => {
  try {
    const result = await Cohort.create(req.body)
    console.log('CREATED', result)
    return res.status(201).json({result})
  } catch (err) {
    console.error(err)
    return res.status(500).json({msg: err})
  }
})

// READ COHORTS: GET
router.get('/cohorts', async (req, res) => {
  try {
    const cohorts = await Cohort.find()
    return res.status(200).json(cohorts)
  } catch (err) {
    console.error(err)
    return res.status(500).json({msg: err})
  }
})

// READ cohort's details: GET
router.get('/cohort/:id', async (req, res) => {
  try {
    const {id} = req.params;

    const cohort = await Cohort.findOne({_id: id})

    if (cohort){
      return res.status(200).json(cohort)
    }
    return res.status(404).json({msg: 'Cohort not found'})

  } catch (err) {
    console.error(err)
    return res.status(500).json({msg: err})
  }
})

// UPDATE COHORT: PATCH (non-destructive)
router.patch('/cohort/:id', async (req, res) => {
  try {
    const {id} = req.params
    const cohort = await Cohort.findOneAndUpdate({_id: id}, req.body, {new: true})

    if (cohort){
      return res.status(200).json({cohort})
    }
    return res.status(404).json({msg: 'Cohort not found'})

  } catch (err) {
    console.error(err)
    return res.status(500).json({msg: err})
  }
})

// DELETE COHORT: 
router.delete('/cohort/:id', async (req, res) => {
  try {
    const {id} = req.params
    const cohort = await Cohort.deleteOne({_id: id})

    return res.status(200).json({})
  } catch (err) {
    console.error(err)
    return res.status(500).json({msg: err})
  }
})

module.exports = router