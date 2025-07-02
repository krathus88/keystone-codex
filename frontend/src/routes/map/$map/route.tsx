import { MapLayout } from "@components/map/$map/MapLayout"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/map/$map")({
    component: MapLayout,
})
