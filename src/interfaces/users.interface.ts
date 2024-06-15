export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface ICreateUser {
  name: string;
  email: string;
}

export interface IUserRepository {
  create(user: ICreateUser): Promise<IUser>;
  findAll(): Promise<IUser[]>;
  findByEmail(email: string): Promise<IUser | null>;
  findById(id: string): Promise<IUser | null>;
  delete(id: string): Promise<IUser | null>;
}

export interface IUserService {
  create(user: ICreateUser): Promise<IUser>;
  findAll(): Promise<IUser[]>;
  findByEmail(email: string): Promise<IUser | null>;
  delete(id: string): Promise<IUser | null>;
  findById(id: string): Promise<IUser | null>;
}
