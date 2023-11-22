const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => { 
  try {
    const whatever = await Tag.findAll({
      include: [{
        model: Product,
        through: ProductTag
      }]
    })
    res.json(whatever)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const dataWhatever = await Tag.findOne({
      where: {id:req.params.id},
      include: [{
        model: Product,
        through: ProductTag
      }]
    })
    res.json(dataWhatever)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const whateverCall = await Tag.create(req.body)
    res.json(whateverCall)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try {
    const whateverAgain = await Tag.update(req.body, {
      where: {id:req.params.id}
    })
    res.json(whateverAgain)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }

});

router.delete('/:id', async (req, res) => {
  try {
    const nameData = await Tag.destroy({
      where: {id:req.params.id}
    })
    res.json(nameData)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  // delete on tag by its `id` value
});

module.exports = router;