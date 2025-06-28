import { Flex, Heading, List } from "@chakra-ui/react"
import { MapCanvas } from "@common/map/MapCanvas"
import {
    CURRENT_SEASON_MAPS,
    type CurrentSeasonMapValueType,
} from "@models/Map"
import { ApiService } from "@services/ApiService"
import { MapService } from "@services/MapService"
import { Select } from "@ui/select"
import { useEffect, useState } from "react"

type MapType = {
    value: CurrentSeasonMapValueType
    url: string
}

export const Map = () => {
    const [currentSeasonMap, setCurrentSeasonMap] = useState<MapType>()

    useEffect(() => {
        const getHelloWorldTest = async () => {
            try {
                const response = await ApiService.getHelloWorld()

                console.log(response)
            } catch (e: unknown) {
                console.error(e)
            }
        }

        getHelloWorldTest()
    }, [])

    const onSelectMapChange = (e: string) => {
        const value = e as CurrentSeasonMapValueType

        const mapUrl = MapService.getCurrentSeasonMap(value)

        setCurrentSeasonMap({
            value: value,
            url: mapUrl,
        })
    }

    return (
        <Flex flexDirection={"column"}>
            <Select
                collection={CURRENT_SEASON_MAPS.map((col) => ({
                    label: col.label,
                    value: col.value,
                }))}
                value={currentSeasonMap?.value ?? ""}
                onValueChange={onSelectMapChange}
            />

            {currentSeasonMap && (
                <>
                    <MapCanvas mapUrl={currentSeasonMap.url} />

                    <Flex flexDirection={"column"} gap={2}>
                        <Heading>Notes</Heading>

                        <List.Root>
                            <List.Item>Note 1</List.Item>

                            <List.Item>Note 2</List.Item>
                        </List.Root>
                    </Flex>
                </>
            )}
        </Flex>
    )
}
