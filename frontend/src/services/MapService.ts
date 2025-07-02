import {
    ALL_AVAILABLE_MAPS,
    CURRENT_SEASON_DUNGEONS,
    CURRENT_SEASON_ICONS,
    CURRENT_SEASON_MAPS,
    type AllAvailableDungeonsType,
    type CurrentSeasonDungeonType,
} from "@models/Map"

export class MapService {
    static isValidMap(value: string): value is AllAvailableDungeonsType {
        return ALL_AVAILABLE_MAPS.some((map) => map.value === value)
    }

    /**
     * Returns map from current season dungeon pool
     *
     * @param mapName - value in currentSeasonMaps
     * @returns string -- Map Url
     */
    static getCurrentSeasonMap(mapName: CurrentSeasonDungeonType): string {
        return CURRENT_SEASON_MAPS[mapName]
    }

    /**
     * Returns map from current season dungeon pool
     *
     * @param mapName - value in currentSeasonMaps
     * @returns string -- Map Url
     */
    static getCurrentSeasonMapIcon(mapName: CurrentSeasonDungeonType): string {
        return CURRENT_SEASON_ICONS[mapName]
    }

    static isCurrentSeasonMapValueType(
        value: string,
    ): value is CurrentSeasonDungeonType {
        return CURRENT_SEASON_DUNGEONS.some((map) => map.value === value)
    }
}
