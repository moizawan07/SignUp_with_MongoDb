let {productModel} = require('../models/productSchema')

const productCont = async (req, res) => {
    console.log("controler ma", productModel);
    
 let {uid,title, description} = req.body

  try {
   let addProduct = await productModel.create({
    uid,
    title,
    description
   })

   console.log('PRODUCTSS ADD SUCESS', addProduct);


   res.json({serverMsg: 'Add SucessFully', data: addProduct})
   
  } 
  catch (error) {
   console.log('not add error', error);
    
  }
}


module.exports = {productCont}