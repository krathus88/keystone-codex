import { Flex, Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"
import { Sidebar } from "./sidebar/Sidebar"

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

            <Grid templateColumns="67px 1fr" flex="1">
                <GridItem borderRight={"1px solid"} borderColor={"border.main"}>
                    <Sidebar />
                </GridItem>

                <GridItem as="main" mb={16} px={4} minH="100%">
                    <Outlet />
                </GridItem>
            </Grid>

            <Footer />

            <TanStackRouterDevtools />
        </Flex>
    )
}
