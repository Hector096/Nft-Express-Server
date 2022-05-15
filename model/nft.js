const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  chain: {
    type: String,
    default: 'Eth',
    required: true,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
    default: 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640',
  },
  price: {
    type: Number,
    default: 0,
    required: true,
  },
  status: {
    type: String,
    default: 'New',
  },
  date_created: {
    type: Date,
    default: Date.now,
  },
});
const nftDb = mongoose.model('NFT', nftSchema);

module.exports = nftDb;
