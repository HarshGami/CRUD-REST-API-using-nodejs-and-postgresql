import { Router } from 'express';
import UserController from '../controllers/user.controller';
import UserValidator from '../middlewares/user.validation';

const router = Router();

router.post('/users',UserValidator.create, UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id',UserValidator.update, UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

export default router;
