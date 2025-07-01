import { Box, Flex, Heading, List, Spinner } from "@chakra-ui/react"
import { MapCanvas } from "@common/map/MapCanvas"
import { NoMapError } from "@components/map/$map/NoMapError"
import { MapService } from "@services/MapService"
import { getRouteApi } from "@tanstack/react-router"
import { useEffect, useRef, useState } from "react"

const routeApi = getRouteApi("/map/$map")

export const $map = () => {
    const params = routeApi.useParams()

    const [map, setMap] = useState<string>()
    const [error, setError] = useState(false)
    const mapContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (params.map && MapService.isCurrentSeasonMapValueType(params.map)) {
            setMap(MapService.getCurrentSeasonMap(params.map))
        } else {
            setError(true)
        }
    }, [params.map])

    if (error) return <NoMapError />

    if (!map) return <Spinner />

    return (
        <Flex flexDirection={"column"}>
            <Box
                ref={mapContainerRef}
                h="100%"
                w="100%"
                maxW={"8xl"}
                borderRadius={"md"}
                overflow={"hidden"}
            >
                <MapCanvas containerRef={mapContainerRef} mapUrl={map} />
            </Box>

            <Flex flexDirection={"column"} gap={2}>
                <Heading>Notes</Heading>

                <List.Root>
                    <List.Item>Note 1</List.Item>

                    <List.Item>Note 2</List.Item>
                </List.Root>
            </Flex>
        </Flex>
    )
}
