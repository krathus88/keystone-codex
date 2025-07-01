import { Map } from "@pages/map/Map"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/map/")({
    component: Map,
})
