import {
    CURRENT_SEASON_DUNGEONS,
    currentSeasonIcons,
    currentSeasonMaps,
    type CurrentSeasonDungeonType,
} from "@models/Map"

export class MapService {
    /**
     * Returns map from current season dungeon pool
     *
     * @param mapName - value in currentSeasonMaps
     * @returns string -- Map Url
     */
    static getCurrentSeasonMap(mapName: CurrentSeasonDungeonType): string {
        return currentSeasonMaps[mapName]
    }

    /**
     * Returns map from current season dungeon pool
     *
     * @param mapName - value in currentSeasonMaps
     * @returns string -- Map Url
     */
    static getCurrentSeasonMapIcon(mapName: CurrentSeasonDungeonType): string {
        return currentSeasonIcons[mapName]
    }

    static isCurrentSeasonMapValueType(
        value: string,
    ): value is CurrentSeasonDungeonType {
        return CURRENT_SEASON_DUNGEONS.some((map) => map.value === value)
    }
}
