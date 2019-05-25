import { Router } from 'express';
import controllers from './listing.controllers';

const router = Router();

router
  .route('/')
  .get(controllers.getAllModel)
  .post(controllers.createOneModel);

router
  .route('/:id')
  .get(controllers.getOneModel)
  .put(controllers.updateOneModel)
  .delete(controllers.removeOneModel);

export default router;
