import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import { tokens } from "./tokens"
import { globalCss } from "./globalCss"
import { recipes } from "./recipes"
import { semanticTokens } from "./semanticTokens"

export const defaultOverrides = defineConfig({
    globalCss: globalCss,
    theme: {
        tokens: tokens,
        semanticTokens: semanticTokens,
        recipes: recipes,
    },
})

const defaultSystem = createSystem(defaultConfig, defaultOverrides)

export default defaultSystem
