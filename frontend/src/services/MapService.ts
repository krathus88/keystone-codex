import { currentSeasonMaps, type CurrentSeasonMapValueType } from "@models/Map"

export class MapService {
    /**
     *
     * @param mapName - value in currentSeasonMaps
     * @returns string -- Map Url
     */
    static getCurrentSeasonMap(mapName: CurrentSeasonMapValueType): string {
        return currentSeasonMaps[mapName]
    }
}
