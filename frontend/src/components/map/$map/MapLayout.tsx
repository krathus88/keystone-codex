import { Grid, GridItem } from "@chakra-ui/react"
import { MapService } from "@services/MapService"
import { useMapContext } from "@store/MapContext"
import { Outlet, useParams } from "@tanstack/react-router"
import { NoMapError } from "./NoMapError"
import { Sidebar } from "./sidebar/Sidebar"
import { useEffect } from "react"

export const MapLayout = () => {
    const params = useParams({ from: "/map/$map" })

    const { map, updateMap } = useMapContext()

    // Sync URL → state
    useEffect(() => {
        if (params.map) {
            updateMap(params.map)
        }
    }, [params.map])

    if (!map) return null

    return (
        <Grid templateColumns="58px 1fr" flex="1">
            <GridItem mt={1} asChild>
                <Sidebar />
            </GridItem>

            <GridItem as="main" mt={2} mb={16} ps={2} pe={4} minH="100%">
                {MapService.isValidMap(map) ? <Outlet /> : <NoMapError />}
            </GridItem>
        </Grid>
    )
}
