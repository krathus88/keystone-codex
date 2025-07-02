import { Button, Flex, Image } from "@chakra-ui/react"
import {
    CURRENT_SEASON_DUNGEONS,
    type CurrentSeasonDungeonType,
} from "@models/Map"
import { MapService } from "@services/MapService"
import { useMapContext } from "@store/MapContext"
import { useRouter } from "@tanstack/react-router"
import { Tooltip } from "@ui/tooltip"

export const SeasonDungeonList = () => {
    const router = useRouter()

    const { map: selectedMap } = useMapContext()

    const onButtonClick = (newMap: CurrentSeasonDungeonType) => {
        const currentPath = router.state.location.pathname
        const mapParamMatch = currentPath.match(/\/map\/([^\/]+)/)

        if (mapParamMatch) {
            const oldMap = mapParamMatch[1]
            const newPath = currentPath.replace(
                `/map/${oldMap}`,
                `/map/${newMap}`,
            )

            router.navigate({
                to: newPath,
            })
        }
    }

    return (
        <Flex flexDirection={"column"} gap={0}>
            {CURRENT_SEASON_DUNGEONS.map((map, index) => {
                const iconUrl = MapService.getCurrentSeasonMapIcon(map.value)

                if (!iconUrl) return null

                return (
                    <Tooltip
                        key={index}
                        content={map.label}
                        positioning={{ placement: "right" }}
                    >
                        <Button
                            variant={"ghost"}
                            p={"3px"}
                            h="fit-content"
                            w="fit-content"
                            border="2px solid"
                            borderColor={
                                map.value === selectedMap
                                    ? "red"
                                    : "transparent"
                            }
                            borderRadius={"lg"}
                            _hover={{ opacity: 0.8 }}
                            onClick={() => onButtonClick(map.value)}
                        >
                            <Image
                                src={iconUrl}
                                w={"40px"}
                                h={"40px"}
                                borderRadius={"md"}
                            />
                        </Button>
                    </Tooltip>
                )
            })}
        </Flex>
    )
}
