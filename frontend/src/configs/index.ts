type EnvironmentType = {
    apiUrl: string
}

export const environment: EnvironmentType = {
    apiUrl: import.meta.env.VITE_API_URL ?? "",
}
