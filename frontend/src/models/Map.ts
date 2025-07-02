import PrioryOfTheSacredFlameMap from "@assets/maps/priory_of_the_sacred_flame.png"
import OperationFloodgateMap from "@assets/maps/operation_floodgate.png"
import TheRookeryMap from "@assets/maps/the_rookery.png"
import TheaterOfPainMap from "@assets/maps/theater_of_pain.png"
import MechagonWorkshopMap from "@assets/maps/mechagon_workshop.png"
import PrioryOfTheSacredFlameIcon from "@assets/icons/priory_of_the_sacred_flame.jpg"
import OperationFloodgateIcon from "@assets/maps/operation_floodgate.png"
import TheRookeryIcon from "@assets/maps/the_rookery.png"
import TheaterOfPainIcon from "@assets/maps/theater_of_pain.png"
import MechagonWorkshopIcon from "@assets/maps/mechagon_workshop.png"

// Make sure to keep the order of the Dungeon listing the same across every item

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

export const currentSeasonMaps: Record<CurrentSeasonDungeonType, string> = {
    PrioryOfTheSacredFlame: PrioryOfTheSacredFlameMap,
    OperationFloodgate: OperationFloodgateMap,
    TheRookery: TheRookeryMap,
    TheaterOfPain: TheaterOfPainMap,
    MechagonWorkshop: MechagonWorkshopMap,
}

export const currentSeasonIcons: Record<CurrentSeasonDungeonType, string> = {
    PrioryOfTheSacredFlame: PrioryOfTheSacredFlameIcon,
    OperationFloodgate: OperationFloodgateIcon,
    TheRookery: TheRookeryIcon,
    TheaterOfPain: TheaterOfPainIcon,
    MechagonWorkshop: MechagonWorkshopIcon,
}
