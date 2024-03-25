import {Router} from 'express'
import { getVisitors ,createVisitors} from '../controllers/visitorControl.js'; 
const visitorRoute = Router();

visitorRoute.route('/get').get(getVisitors);

visitorRoute.route('/create').post(createVisitors)

export default visitorRoute;