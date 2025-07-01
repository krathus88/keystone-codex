import { Flex, Text } from "@chakra-ui/react"

export const NoMapError = () => {
    return (
        <Flex
            mt={4}
            p={8}
            w="fit-content"
            mx="auto"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={4}
            bg={"background.secondary"}
            borderRadius={"lg"}
        >
            <Text color="text.error">The specified map couldn't be found.</Text>

            <Text>Please make sure you've selected a valid map.</Text>

            {/* TODO: Add link to Discord support */}
            <Text>If the issue continues, please contact support.</Text>
        </Flex>
    )
}
