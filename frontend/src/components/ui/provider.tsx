"use client"

import { ChakraProvider, type SystemContext } from "@chakra-ui/react"
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode"

type ProviderProps = {
    theme: SystemContext
} & ColorModeProviderProps

export const Provider = ({ theme, ...rest }: ProviderProps) => {
    return (
        <ChakraProvider value={theme}>
            <ColorModeProvider /* defaultTheme="dark" */ {...rest} />
        </ChakraProvider>
    )
}
