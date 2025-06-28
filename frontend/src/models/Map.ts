import PrioryOfTheSacredFlameMap from "@assets/maps/priory_of_the_sacred_flame.png"
import OperationFloodgateMap from "@assets/maps/operation_floodgate.png"
import TheRookeryMap from "@assets/maps/the_rookery.png"
import TheaterOfPainMap from "@assets/maps/theater_of_pain.png"
import MechagonWorkshopMap from "@assets/maps/mechagon_workshop.png"

export const CURRENT_SEASON_MAPS = [
    { value: "PrioryOfTheSacredFlame", label: "Priory of the Sacred Flame" },
    { value: "OperationFloodgate", label: "Operation: Floodgate" },
    { value: "TheRookery", label: "The Rookery" },
    { value: "TheaterOfPain", label: "Theater of Pain" },
    { value: "MechagonWorkshop", label: "Mechagon: Workshop" },
] as const
export type CurrentSeasonMapValueType =
    (typeof CURRENT_SEASON_MAPS)[number]["value"]

export const currentSeasonMaps: Record<CurrentSeasonMapValueType, string> = {
    PrioryOfTheSacredFlame: PrioryOfTheSacredFlameMap,
    OperationFloodgate: OperationFloodgateMap,
    TheRookery: TheRookeryMap,
    TheaterOfPain: TheaterOfPainMap,
    MechagonWorkshop: MechagonWorkshopMap,
}
