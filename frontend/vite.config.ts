import { tanstackRouter } from "@tanstack/router-plugin/vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        // make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
        tanstackRouter({
            target: "react",
            autoCodeSplitting: true,
        }),
        react({
            babel: {
                plugins: ["babel-plugin-react-compiler"],
            },
        }),
    ],

    server: {
        port: 3000,
        host: true,
        proxy: {
            "/api": {
                target: "http://localhost:8000",
                changeOrigin: true,
            },
        },
    },

    assetsInclude: ["**/*.md"],

    resolve: {
        alias: {
            "@public": path.resolve(__dirname, "./public"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@styles": path.resolve(__dirname, "./src/styles"),
            "@configs": path.resolve(__dirname, "./src/configs"),
            "@lib": path.resolve(__dirname, "./src/lib"),
            "@services": path.resolve(__dirname, "./src/services"),
            "@models": path.resolve(__dirname, "./src/models"),
            "@store": path.resolve(__dirname, "./src/store"),
            "@routes": path.resolve(__dirname, "./src/routes"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@common": path.resolve(__dirname, "./src/components/common"),
            "@ui": path.resolve(__dirname, "./src/components/ui"),
            "@components": path.resolve(__dirname, "./src/components"),
        },
    },
})
