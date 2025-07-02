import { Map } from "@pages/map/$map/Map"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/map/$map/")({
    component: Map,
})
