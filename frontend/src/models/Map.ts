import MechagonWorkshopIcon from "@assets/icons/mechagon_workshop.jpg"
import OperationFloodgateIcon from "@assets/icons/operation_floodgate.jpg"
import PrioryOfTheSacredFlameIcon from "@assets/icons/priory_of_the_sacred_flame.jpg"
import TheRookeryIcon from "@assets/icons/the_rookery.jpg"
import TheaterOfPainIcon from "@assets/icons/theater_of_pain.jpg"
import MechagonWorkshopMap from "@assets/maps/mechagon_workshop.png"
import OperationFloodgateMap from "@assets/maps/operation_floodgate.png"
import PrioryOfTheSacredFlameMap from "@assets/maps/priory_of_the_sacred_flame.png"
import TheRookeryMap from "@assets/maps/the_rookery.png"
import TheaterOfPainMap from "@assets/maps/theater_of_pain.png"

/*
 * Make sure to keep the order of the
 * Dungeons listing the same across every item
 */

// #region -- Current Season
export const CURRENT_SEASON_DUNGEONS = [
    { value: "PrioryOfTheSacredFlame", label: "Priory of the Sacred Flame" },
    { value: "OperationFloodgate", label: "Operation: Floodgate" },
    { value: "TheRookery", label: "The Rookery" },
    { value: "TheaterOfPain", label: "Theater of Pain" },
    { value: "MechagonWorkshop", label: "Mechagon: Workshop" },
] as const
export type CurrentSeasonDungeonType =
    (typeof CURRENT_SEASON_DUNGEONS)[number]["value"]

export const DEFAULT_SELECTED_DUNGEON = CURRENT_SEASON_DUNGEONS[0].value

export const CURRENT_SEASON_MAPS: Record<CurrentSeasonDungeonType, string> = {
    PrioryOfTheSacredFlame: PrioryOfTheSacredFlameMap,
    OperationFloodgate: OperationFloodgateMap,
    TheRookery: TheRookeryMap,
    TheaterOfPain: TheaterOfPainMap,
    MechagonWorkshop: MechagonWorkshopMap,
}
export const CURRENT_SEASON_ICONS: Record<CurrentSeasonDungeonType, string> = {
    PrioryOfTheSacredFlame: PrioryOfTheSacredFlameIcon,
    OperationFloodgate: OperationFloodgateIcon,
    TheRookery: TheRookeryIcon,
    TheaterOfPain: TheaterOfPainIcon,
    MechagonWorkshop: MechagonWorkshopIcon,
}

// #endregion

// #region -- All Available Data
export const ALL_AVAILABLE_DUNGEONS = [
    ...CURRENT_SEASON_DUNGEONS,
    // add more maps here in the future
] as const
export type AllAvailableDungeonsType =
    (typeof ALL_AVAILABLE_DUNGEONS)[number]["value"]

export const ALL_AVAILABLE_MAPS: Record<AllAvailableDungeonsType, string> = {
    ...CURRENT_SEASON_MAPS,
}
export const ALL_AVAILABLE_ICONS: Record<AllAvailableDungeonsType, string> = {
    ...CURRENT_SEASON_ICONS,
}

// #endregion
