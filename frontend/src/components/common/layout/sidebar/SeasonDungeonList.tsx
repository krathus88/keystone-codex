import { Button, Flex, Image } from "@chakra-ui/react"
import {
    CURRENT_SEASON_DUNGEONS,
    type CurrentSeasonDungeonType,
} from "@models/Map"
import { MapService } from "@services/MapService"
import { useMapContext } from "@store/MapContext"
import { Tooltip } from "@ui/tooltip"

export const SeasonDungeonList = () => {
    const { map: selectedMap, updateMap } = useMapContext()

    const onButtonClick = (map: CurrentSeasonDungeonType) => {
        updateMap(map)
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
                                w={"50px"}
                                h={"50px"}
                                borderRadius={"md"}
                            />
                        </Button>
                    </Tooltip>
                )
            })}
        </Flex>
    )
}
