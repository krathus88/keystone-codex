import {
    DEFAULT_SELECTED_DUNGEON,
    type CurrentSeasonDungeonType,
} from "@models/Map"
import { useRouter } from "@tanstack/react-router"
import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react"

type MapContextType = {
    map: CurrentSeasonDungeonType
    updateMap: (map: CurrentSeasonDungeonType) => void
}

const MapContext = createContext<MapContextType | undefined>(undefined)

export const useMapContext = () => {
    const context = useContext(MapContext)
    if (!context) {
        throw new Error("useMapContext must be used within a MapProvider")
    }
    return context
}

type MapProviderProps = {
    children: ReactNode
}

export const MapProvider = ({ children }: MapProviderProps) => {
    const router = useRouter()

    // Try to find the matched route with param `map`
    const match = router.state.matches.find((m) => m.routeId?.includes("map"))
    const mapParam = match?.params?.map

    const [map, setMap] = useState<CurrentSeasonDungeonType>(
        mapParam ?? DEFAULT_SELECTED_DUNGEON,
    )

    // Sync URL → state
    useEffect(() => {
        if (mapParam) {
            setMap((prevMap) => {
                if (prevMap !== mapParam) return mapParam
                return prevMap // No update if it's the same
            })
        }
    }, [router.state.matches])

    const updateMap = (map: CurrentSeasonDungeonType) => {
        setMap((prevMap) => {
            if (prevMap !== map) return map
            return prevMap // No update if it's the same
        })
    }

    return (
        <MapContext.Provider value={{ map, updateMap }}>
            {children}
        </MapContext.Provider>
    )
}
