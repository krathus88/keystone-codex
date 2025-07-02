import { Link as ChakraLink, Flex } from "@chakra-ui/react"
import { DEFAULT_SELECTED_DUNGEON } from "@models/Map"
import { useMapContext } from "@store/MapContext"
import { Link as TanstackLink } from "@tanstack/react-router"
import { ColorModeButton } from "@ui/color-mode"
import { H1 } from "@ui/h1"

export const Header = () => {
    const { map } = useMapContext()

    return (
        <Flex
            as="header"
            p={2}
            gap={4}
            borderBottom="1px solid"
            borderColor="border.main"
        >
            <ChakraLink asChild>
                <TanstackLink to="/">
                    <H1 px={2}>Keystone Codex</H1>
                </TanstackLink>
            </ChakraLink>

            <Flex as="nav" gap={2} alignItems={"center"}>
                <ChakraLink asChild>
                    <TanstackLink
                        to={"/map/$map"}
                        params={{ map: map ?? DEFAULT_SELECTED_DUNGEON }}
                        className="[&.active]:font-bold"
                    >
                        Map
                    </TanstackLink>
                </ChakraLink>

                <ChakraLink asChild>
                    <TanstackLink
                        to={"/map/$map/notes"}
                        params={{ map: map ?? DEFAULT_SELECTED_DUNGEON }}
                        className="[&.active]:font-bold"
                    >
                        Notes
                    </TanstackLink>
                </ChakraLink>
            </Flex>

            <Flex ms="auto" me={4} alignItems={"center"}>
                <ColorModeButton />
            </Flex>
        </Flex>
    )
}
