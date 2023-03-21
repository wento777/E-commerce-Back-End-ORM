const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    // include: [{
    //   model: Product,
    //   through: ProductTag,
    // },
    // ],
    // include: [Product]
  })
  .then(results => {
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data  //what does this mean?
    Tag.findAll({
      where: {
        id: req.params.id,
      },
      // include: [Product]
      // include: [{
      //     model: Product,
      //     through: ProductTag,
      //   },
      // ],
    }).then(results => {
      res.json(results);
    });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    id: req.body.id,
    tag_name: req.body.tag_name, 
  }).then(results => {
    res.json(results);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      id: req.body.id,
      tag_name: req.body.tag_name,
    },
    {
    where: {
      id: req.params.id,
    },
  }
  ).then(results => {
    res.json(results);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).then(results => {
    res.json(results);
  });
});

module.exports = router;