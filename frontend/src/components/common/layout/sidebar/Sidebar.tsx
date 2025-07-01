import { Flex } from "@chakra-ui/react"
import { SeasonDungeonList } from "./SeasonDungeonList"

export const Sidebar = () => {
    return (
        <Flex p={2} flexDirection={"column"}>
            <SeasonDungeonList />
        </Flex>
    )
}
