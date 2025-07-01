import { defineRecipe } from "@chakra-ui/react"

export const headingRecipe = defineRecipe({
    variants: {
        size: {
            h1: {
                fontFamily: "roboto",
                fontSize: "3rem",
                lineHeight: "normal",
                letterSpacing: "normal",
            },
            h2: {
                fontFamily: "roboto",
                fontSize: "2.5rem",
                lineHeight: "normal",
                letterSpacing: "normal",
            },
            h3: {
                fontFamily: "roboto",
                fontSize: "2rem",
                lineHeight: "normal",
                letterSpacing: "normal",
            },
        },
    },
})
