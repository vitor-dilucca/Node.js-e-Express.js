const Product = require('../models/product')

// 4:20:00~ problema com o sort
const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort('-name price')
  // throw new Error('testing async errors')
  res.status(200).json({
    nbHits: products.length,
    products
  })
}

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query
  const queryObject = {}

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false
  }
  if (company) {
    queryObject.company = company
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' }
  }
  // console.log(queryObject)
  let result = Product.find(queryObject)
  if (sort) {
    const sortList = sort.split(',').join(' ')
    result = result.sort(sortList)
  }else{
    result = result.sort('createAt')
  }
  const products = await result
  res.status(200).json({
    nbHits: products.length,
    products
  })
}


module.exports = {
  getAllProducts, getAllProductsStatic
}