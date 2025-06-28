import { Heading, type HeadingProps } from "@chakra-ui/react"
import type { ReactNode } from "react"

type H1Props = {
    children: ReactNode
} & HeadingProps

export const H1 = ({ children, ...rest }: H1Props) => {
    return (
        <Heading as="h1" size={"h1"} {...rest}>
            {children}
        </Heading>
    )
}
