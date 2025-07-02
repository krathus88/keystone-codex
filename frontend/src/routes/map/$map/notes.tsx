import { Notes } from "@pages/map/$map/notes/Notes"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/map/$map/notes")({
    component: Notes,
})
