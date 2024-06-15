import { PrismaClient } from "@prisma/client";
import {
  ICreateUser,
  IUser,
  IUserRepository,
} from "../interfaces/users.interface";

export class UserRepository implements IUserRepository {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll(): Promise<IUser[]> {
    const result = await this.prisma.user.findMany();
    return result;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const result = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    return result || null;
  }

  async create(user: ICreateUser): Promise<IUser> {
    const { name, email } = user;
    const result = await this.prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return result;
  }

  async delete(id: string): Promise<IUser | null> {
    const result = await this.prisma.user.delete({
      where: {
        id,
      },
    });

    return result || null;
  }

  async findById(id: string): Promise<IUser | null> {
    const result = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    return result || null;
  }
}
