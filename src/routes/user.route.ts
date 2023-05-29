import { Router } from 'express';
import UserController from '../controllers/user.controller';
import Validator from '../middlewares/user.validation';

const router = Router();

router.post('/users',Validator.createValidation, UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id',Validator.updatevalidation, UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

export default router;
