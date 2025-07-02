import { Box, Flex, Heading, List } from "@chakra-ui/react"
import { MapCanvas } from "@common/map/MapCanvas"
import { NoMapError } from "@components/map/$map/NoMapError"
import { Route } from "@routes/map/$map"
import { MapService } from "@services/MapService"
import { useParams } from "@tanstack/react-router"
import { useRef } from "react"

export const Map = () => {
    const params = useParams({ from: Route.id })

    const mapContainerRef = useRef<HTMLDivElement>(null)

    if (!MapService.isCurrentSeasonMapValueType(params.map))
        return <NoMapError />

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
                <MapCanvas
                    containerRef={mapContainerRef}
                    mapUrl={MapService.getCurrentSeasonMap(params.map)}
                />
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
