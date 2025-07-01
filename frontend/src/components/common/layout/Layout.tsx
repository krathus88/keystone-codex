import { Box, Flex } from "@chakra-ui/react"
import { Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"

export const Layout = () => {
    return (
        <Flex
            id="Layout"
            mx="auto"
            minH="100dvh"
            flexDirection={"column"}
            justifyContent={"center"}
            maxW={"1920px"}
        >
            <Header />

            <Box as="main" mb={16} mx={4} minH="100%">
                <Outlet />
            </Box>

            <Footer />

            <TanStackRouterDevtools />
        </Flex>
    )
}
