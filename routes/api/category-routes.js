const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const catDat = await Category.findAll({
      include: [ Product ]
    })
    res.json(catDat)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  
});

router.get('/:id', async (req, res) => {
  try {
    const catDat = await Category.findOne({
      where: {id:req.params.id},
      include: [ Product ]
    })
    res.json(catDat)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  try {
    const catDat = await Category.create(req.body)
    res.json(catDat)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
    const catDat = await Category.update(req.body, {
      where: {id:req.params.id}

    })
    res.json(catDat)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  
});

router.delete('/:id', async (req, res) => {
  try {
    const catDat = await Category.destroy({
      where: {id:req.params.id}
    })
    res.json(catDat)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
 
});

module.exports = router;