import { Heading, type HeadingProps } from "@chakra-ui/react"
import type { ReactNode } from "react"

type H3Props = {
    children: ReactNode
} & HeadingProps

export const H3 = ({ children, ...rest }: H3Props) => {
    return (
        <Heading as="h3" size={"h3"} {...rest}>
            {children}
        </Heading>
    )
}
