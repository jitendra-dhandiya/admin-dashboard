import {Router} from 'express'
import {createProduct,getallProduct} from '../controllers/productControl.js'

const productRoute = Router();

productRoute.route('/create').post(createProduct)


productRoute.route('/get').get(getallProduct)

export default productRoute;