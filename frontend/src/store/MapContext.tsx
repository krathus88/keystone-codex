import { createContext, useContext, useState, type ReactNode } from "react"

type MapContextType = {
    map: string | undefined
    updateMap: (map: string) => void
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
    const [map, setMap] = useState<string>()

    const updateMap = (map: string) => {
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
