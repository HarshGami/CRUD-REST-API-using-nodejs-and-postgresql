import CreateUserDTO from '../dtos/create.user.dto';
import UpdateUserDTO from '../dtos/update.user.dto';
import User from "../entities/user.model";

class UserService {
  async createUser(userData: CreateUserDTO): Promise<any> {
    User.create({
      email: userData.email,
      password: userData.password,
      name: userData.name
    });
    return { status: "success", message: "userData added successfully" };
  }

  async getAllUsers(): Promise<any> {
    return await User.findAll();
  }

  async getUserById(id: number): Promise<any> {
    return await User.findOne({ where: { id: id } });
  }

  async updateUser(id: number, userData: UpdateUserDTO): Promise<any> {
    return await User.update(userData, { where: { id: id } });
  }

  async deleteUser(id: number): Promise<any> {
    return User.destroy({ where: { id } });
  }
}

export default new UserService();
