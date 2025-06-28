import { defineSemanticTokens } from "@chakra-ui/react"

export const colors = defineSemanticTokens.colors({
    text: {
        main: {
            value: {
                base: "#000",
                _dark: "#fff",
            },
        },
        error: {
            value: {
                base: "#e84057",
                _dark: "#e84057",
            },
        },
    },
    background: {
        main: {
            value: {
                base: "#edeef1",
                _dark: "#1c1c1f",
            },
        },
    },
    border: {
        main: {
            value: {
                base: "#7b7a8e",
                _dark: "#7b7a8e",
            },
        },
    },
})
