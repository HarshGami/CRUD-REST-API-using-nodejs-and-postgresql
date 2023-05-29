import { Request, Response } from 'express';
import UserService from '../services/user.service';
import CreateUserDTO from '../dtos/create.user.dto';
import UpdateUserDTO from '../dtos/update.user.dto';

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const userData: CreateUserDTO = req.body;
      const user = await UserService.createUser(userData);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const Id = Number(req.params.id);
      const user = await UserService.getUserById(Id);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(user);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const userId = Number(req.params.id);
      const userData: UpdateUserDTO = req.body;
      const affectedRows = await UserService.updateUser(userId, userData);
      if (!affectedRows) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json({ message: 'User updated successfully' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const userId = Number(req.params.id);
      const affectedRows = await UserService.deleteUser(userId);
      if (affectedRows === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json({ message: 'User deleted successfully' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default new UserController();
