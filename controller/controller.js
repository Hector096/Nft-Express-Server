const NftDb = require('../model/nft');

// create and save new nft
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'Content cannot be empty' });
  }
  const nft = new NftDb({
    title: req.body.title,
    chain: req.body.chain,
    description: req.body.description,
    img: req.body.img,
    price: req.body.price,
    status: req.body.status,
  });
  nft.save(nft).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.status(500).send({ message: err.message });
  });
};

// edit or update existing nft
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'Content cannot be empty' });
  }
  const { id } = req.params;
  NftDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then((data) => {
    if (!data) {
      // eslint-disable-next-line no-template-curly-in-string
      res.status(404).send({ message: 'Cannot find nft with this ${id}' });
    } else {
      res.send(data);
    }
  }).catch((err) => {
    res.status(500).send({ message: err.message });
  });
};

// return all nft
exports.find = (req, res) => {
  NftDb.find().then((nft) => {
    res.send(nft);
  }).catch((err) => {
    res.status(500).send({ message: err.message });
  });
};

// delete the nft
exports.delete = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'Content cannot be empty' });
  }
  const { id } = req.params;
  NftDb.findByIdAndDelete(id).then((data) => {
    if (!data) {
      // eslint-disable-next-line no-template-curly-in-string
      res.status(404).send({ message: 'Cannot find nft with this ${id}' });
    } else {
      res.send({ message: 'Nft deleted!' });
    }
  }).catch((err) => {
    res.status(500).send({ message: err.message });
  });
};
