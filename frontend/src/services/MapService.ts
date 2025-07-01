import {
    CURRENT_SEASON_MAPS,
    currentSeasonMaps,
    type CurrentSeasonMapValueType,
} from "@models/Map"

export class MapService {
    /**
     *
     * @param mapName - value in currentSeasonMaps
     * @returns string -- Map Url
     */
    static getCurrentSeasonMap(mapName: CurrentSeasonMapValueType): string {
        return currentSeasonMaps[mapName]
    }

    static isCurrentSeasonMapValueType(
        value: string,
    ): value is CurrentSeasonMapValueType {
        return CURRENT_SEASON_MAPS.some((map) => map.value === value)
    }
}
