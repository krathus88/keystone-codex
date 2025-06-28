import { createSystem, defaultConfig } from "@chakra-ui/react"
import defaultTheme, { defaultOverrides } from "./default"

export { defaultTheme }

// Global theme -- used solely to generate typescript types
export default createSystem(defaultConfig, defaultOverrides)
