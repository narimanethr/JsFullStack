import { Router } from 'express';
const router = Router();
import { notFound, handleError } from '../controllers/error.controller';
// catch 404 and forward to error handler
router.use(notFound);
// error handler
router.use(handleError);
export default router;
