import { Flex } from "@chakra-ui/react"
import {
    CURRENT_SEASON_DUNGEONS,
    type CurrentSeasonDungeonType,
} from "@models/Map"
import { MapService } from "@services/MapService"
import { Select } from "@ui/select"
import { useState } from "react"
import { useNavigate } from "@tanstack/react-router"

type MapType = {
    value: CurrentSeasonDungeonType
    url: string
}

export const Map = () => {
    const navigate = useNavigate()

    const [currentSeasonMap, setCurrentSeasonMap] = useState<MapType>()

    const onSelectMapChange = (e: string) => {
        const value = e as CurrentSeasonDungeonType

        const mapUrl = MapService.getCurrentSeasonMap(value)

        setCurrentSeasonMap({
            value: value,
            url: mapUrl,
        })

        // Navigate to /map/:map
        navigate({ to: "/map/$map", params: { map: value } })
    }

    return (
        <Flex flexDirection={"column"}>
            <Select
                collection={CURRENT_SEASON_DUNGEONS.map((col) => ({
                    label: col.label,
                    value: col.value,
                }))}
                value={currentSeasonMap?.value ?? ""}
                onValueChange={onSelectMapChange}
            />
        </Flex>
    )
}
