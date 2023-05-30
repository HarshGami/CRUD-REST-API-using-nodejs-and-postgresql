import CreateUserDTO from '../dtos/create.user.dto';
import UpdateUserDTO from '../dtos/update.user.dto';
import User from "../entities/user.model";
import bcrypt from "bcrypt";

class UserService {
  async createUser(userData: CreateUserDTO): Promise<any> {

    const user = await User.findOne({ where: { email: userData.email } });
    if (user) return { status: "failed", message: "user with email is exist" };

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(userData.password, salt);

    User.create({
      email: userData.email,
      password: hash,
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
