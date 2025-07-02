import { Flex } from "@chakra-ui/react"
import { SeasonDungeonList } from "./SeasonDungeonList"

export const Sidebar = () => {
    return (
        <Flex p={1} flexDirection={"column"}>
            <SeasonDungeonList />
        </Flex>
    )
}
