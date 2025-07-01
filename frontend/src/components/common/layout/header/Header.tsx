import { Flex } from "@chakra-ui/react"
import { Link } from "@tanstack/react-router"
import { ColorModeButton } from "@ui/color-mode"
import { H1 } from "@ui/h1"

export const Header = () => {
    return (
        <Flex
            as="header"
            mb={2}
            p={2}
            gap={4}
            borderBottom="1px solid"
            borderColor="border.main"
        >
            <Link to="/">
                <H1 px={2}>Tips & Tricks</H1>
            </Link>

            <Flex as="nav" gap={2} alignItems={"center"}>
                <Link to="/map" className="[&.active]:font-bold">
                    Map
                </Link>
            </Flex>

            <Flex ms="auto" me={4} alignItems={"center"}>
                <ColorModeButton />
            </Flex>
        </Flex>
    )
}
