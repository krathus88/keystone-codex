import { Flex, type FlexProps } from "@chakra-ui/react"
import { SeasonDungeonList } from "./SeasonDungeonList"

type SidebarProps = FlexProps

export const Sidebar = ({ ...rest }: SidebarProps) => {
    return (
        <Flex p={1} flexDirection={"column"} {...rest}>
            <SeasonDungeonList />
        </Flex>
    )
}
