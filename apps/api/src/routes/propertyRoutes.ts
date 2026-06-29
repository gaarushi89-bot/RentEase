import { Router } from 'express';
import * as propertyController from '../controllers/propertyController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();

router.get('/', propertyController.getProperties);
router.get('/:id', propertyController.getPropertyById);
router.post('/', authenticate, authorize(['landlord', 'admin']), propertyController.createProperty);

export default router;
