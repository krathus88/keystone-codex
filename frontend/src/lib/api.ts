import { environment } from "@configs/index"
import axios from "axios"

export const coreApi = axios.create({
    baseURL: `${environment.apiUrl}/api`,
    timeout: 10000,
    withCredentials: true,
})
