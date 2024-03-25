import productModel from "../models/productModel.js";

// Create product
export const createProduct = async (req, resp) => {
  const product = new productModel(req.body);
  try {
    const doc=await product.save();
    resp.status(201).json(doc)
  } catch (error) {
    resp.status(400).json(error)
  }

}
  

// Get product

export const getallProduct = async(req,resp) =>{
    try {
        let product = await productModel.find({}).exec()
        
            resp.status(200).json({
                "success":true,
                "products":product
            })
        
    } catch (error) {
        return(
            resp.status(400).json({
                error
            })
        )
    }
}