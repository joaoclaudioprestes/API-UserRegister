"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const users_repository_1 = require("../repositories/users.repository");
class UserService {
    constructor() {
        this.repository = new users_repository_1.UserRepository();
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!user.name || !user.email) {
                throw new Error("name and email are required");
            }
            const existingUser = yield this.repository.findByEmail(user.email);
            if (existingUser) {
                throw new Error("email already in use");
            }
            const result = yield this.repository.create(user);
            return result;
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email) {
                throw new Error("email is required");
            }
            const user = yield this.repository.findByEmail(email);
            if (!user) {
                throw new Error("User not found");
            }
            const result = yield this.repository.findByEmail(email);
            return result;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.repository.findAll();
            if (!result) {
                throw new Error("No users found");
            }
            return result;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.repository.delete(id);
            if (!result) {
                throw new Error("User not found");
            }
            return result;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.repository.findById(id);
            if (!result) {
                throw new Error("User not found");
            }
            return result || null;
        });
    }
}
exports.UserService = UserService;
