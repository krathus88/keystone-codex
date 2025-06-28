import { coreApi } from "@lib/api"
import type { CreateUserCMD } from "@models/Api"
import type { UserType } from "@pages/Home"

export class ApiService {
    static async getHelloWorld() {
        const response = await coreApi.get("/")
        return response.data
    }

    static async getAllUsers(): Promise<UserType[]> {
        const response = await coreApi.get("/user/list")
        return response.data
    }

    static async getUserById(userId: number): Promise<UserType> {
        const response = await coreApi.get(`/user/get/${userId}`)
        return response.data
    }

    static async createUser(cmd: CreateUserCMD) {
        const response = await coreApi.post("/user/create", cmd)
        return response.data
    }

    static async deleteUser(userId: number) {
        const response = await coreApi.delete(`/user/delete/${userId}`)
        return response.data
    }
}
