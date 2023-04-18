const Product = require('../models/product')

// 4:20:00~ problema com o sort
const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).select('name price')
  // throw new Error('testing async errors')
  res.status(200).json({
    nbHits: products.length,
    products
  })
}

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query
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
  //sort
  if (sort) {
    const sortList = sort.split(',').join(' ')
    result = result.sort(sortList)
  }else{
    result = result.sort('createAt')
  }
  
  //fields
  if(fields){
    const fieldsList = fields.split(',').join(' ')
    result = result.select(fieldsList)
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