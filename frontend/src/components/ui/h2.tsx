import { Heading, type HeadingProps } from "@chakra-ui/react"
import type { ReactNode } from "react"

type H2Props = {
    children: ReactNode
} & HeadingProps

export const H2 = ({ children, ...rest }: H2Props) => {
    return (
        <Heading as="h2" size={"h2"} {...rest}>
            {children}
        </Heading>
    )
}
