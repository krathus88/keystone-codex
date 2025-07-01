import { Link as ChakraLink, Flex, Image } from "@chakra-ui/react"
import { CURRENT_SEASON_DUNGEONS } from "@models/Map"
import { MapService } from "@services/MapService"
import { Link as TanstackLink } from "@tanstack/react-router"
import { Tooltip } from "@ui/tooltip"

export const SeasonDungeonList = () => {
    return (
        <Flex flexDirection={"column"} gap={1}>
            {CURRENT_SEASON_DUNGEONS.map((map, index) => {
                const iconUrl = MapService.getCurrentSeasonMapIcon(map.value)

                if (!iconUrl) return null

                return (
                    <ChakraLink key={index} w="fit-content" asChild>
                        <TanstackLink
                            to="/map/$map"
                            params={{ map: map.value }}
                        >
                            <Tooltip
                                content={map.label}
                                positioning={{ placement: "right" }}
                            >
                                <Image
                                    src={iconUrl}
                                    w={"50px"}
                                    h={"50px"}
                                    borderRadius={"md"}
                                    _hover={{ opacity: 0.8 }}
                                />
                            </Tooltip>
                        </TanstackLink>
                    </ChakraLink>
                )
            })}
        </Flex>
    )
}
