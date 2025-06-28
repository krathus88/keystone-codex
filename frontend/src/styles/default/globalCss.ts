import { defineGlobalStyles } from "@chakra-ui/react"

export const globalCss = defineGlobalStyles({
    "*": {
        fontFamily: "roboto",
        fontWeight: "normal",
        lineHeight: "normal",
    },
    "#root": {
        minH: "100dvh",
        backgroundColor: "background.main",
        color: "text.main",
    },
})
