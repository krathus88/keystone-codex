import { defineRecipe } from "@chakra-ui/react"

export const headingRecipe = defineRecipe({
    variants: {
        size: {
            h1: {
                fontFamily: "roboto",
                fontSize: "64px",
                lineHeight: "normal",
                letterSpacing: "normal",
            },
            h2: {
                fontFamily: "roboto",
                fontSize: "48px",
                lineHeight: "normal",
                letterSpacing: "normal",
            },
            h3: {
                fontFamily: "roboto",
                fontSize: "32px",
                lineHeight: "normal",
                letterSpacing: "normal",
            },
        },
    },
})
