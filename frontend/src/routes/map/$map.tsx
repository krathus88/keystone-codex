import { $map } from "@pages/map/$map/$map"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/map/$map")({
    component: $map,
})
