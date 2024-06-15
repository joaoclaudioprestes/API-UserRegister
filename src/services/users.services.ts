import { UserRepository } from "../repositories/users.repository";
import {
  ICreateUser,
  IUser,
  IUserRepository,
  IUserService,
} from "../interfaces/users.interface";

export class UserService implements IUserService {
  private repository: IUserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  async create(user: ICreateUser): Promise<IUser> {
    if (!user.name || !user.email) {
      throw new Error("name and email are required");
    }

    const existingUser = await this.repository.findByEmail(user.email);

    if (existingUser) {
      throw new Error("email already in use");
    }

    const result = await this.repository.create(user);
    return result;
  }

  async findByEmail(email: string): Promise<IUser | null> {

    if (!email) {
      throw new Error("email is required");
    }

    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    const result = await this.repository.findByEmail(email);
    return result;
  }

  async findAll(): Promise<IUser[]> {
    const result = await this.repository.findAll();

    if (!result) {
      throw new Error("No users found");
    }

    return result;
  }

  async delete(id: string): Promise<IUser | null> {
    const result = await this.repository.delete(id);

    if (!result) {
      throw new Error("User not found");
    }

    return result;
  }

  async findById(id: string): Promise<IUser | null> {
    const result = await this.repository.findById(id);

    if (!result) {
      throw new Error("User not found");
    }

    return result || null;
  }
}
