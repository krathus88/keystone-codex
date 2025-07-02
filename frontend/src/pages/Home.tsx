import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import { ApiService } from "@services/ApiService"
import { useState } from "react"

export type UserType = {
    id: number
    username: string
    email: string
    is_active: boolean
}

function generateRandomUsername() {
    const adjectives = [
        "Happy",
        "Crazy",
        "Silly",
        "Lazy",
        "Bright",
        "Funky",
        "Clever",
        "Zany",
    ]
    const nouns = [
        "Krab",
        "Ninja",
        "Tiger",
        "Panda",
        "Eagle",
        "Wizard",
        "Samurai",
        "Pirate",
    ]

    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)]
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)]
    const randomNum = Math.floor(Math.random() * 1000) // optional number suffix

    return `${randomAdj}${randomNoun}${randomNum}`
}

function generateRandomEmail() {
    const domains = ["example.com", "mail.com", "test.org", "random.net"]
    const username = generateRandomUsername().toLowerCase()
    const domain = domains[Math.floor(Math.random() * domains.length)]

    return `${username}@${domain}`
}

export const Home = () => {
    const [user, setUser] = useState<UserType>()

    const onGetUser = async () => {
        if (!user) return

        try {
            const response = await ApiService.getUserById(user.id)

            console.log(response)
            setUser(response)
        } catch (e: unknown) {
            console.error(e)
        }
    }

    const onGetAllUsers = async () => {
        try {
            const response = await ApiService.getAllUsers()

            console.log(response)
            setUser(response[0])
        } catch (e: unknown) {
            console.error(e)
        }
    }

    const onCreateUser = async () => {
        try {
            const response = await ApiService.createUser({
                email: generateRandomEmail(),
                username: generateRandomUsername(),
            })
            console.log(response)
        } catch (e: unknown) {
            console.error(e)
        }
    }

    const onDeleteUser = async () => {
        if (!user) return

        try {
            const response = await ApiService.deleteUser(user.id)
            console.log(response)
        } catch (e: unknown) {
            console.error(e)
        }
    }

    return (
        <Box px={4}>
            <Flex mb="24px" flex="wrap" gap="12px">
                <Button
                    variant="solid"
                    colorPalette={"green"}
                    onClick={onGetUser}
                >
                    Get specific user
                </Button>

                <Button
                    variant="solid"
                    colorPalette={"green"}
                    onClick={onGetAllUsers}
                >
                    Get all Users
                </Button>

                <Button
                    variant="solid"
                    colorPalette={"blue"}
                    onClick={onCreateUser}
                >
                    Create User
                </Button>

                <Button
                    variant="solid"
                    colorPalette={"red"}
                    onClick={onDeleteUser}
                >
                    Delete specific user
                </Button>
            </Flex>

            <Flex flexDirection="column" gap={8}>
                <Text fontWeight={"light"}>
                    Bacon ipsum dolor amet prosciutto brisket venison drumstick,
                    andouille jerky tenderloin corned beef chislic bresaola cow
                    spare ribs frankfurter meatball pork loin. Meatball swine
                    shoulder, pig rump turducken spare ribs meatloaf boudin.
                    Pastrami ball tip tail alcatra buffalo t-bone flank, jerky
                    shankle biltong chuck andouille cupim meatloaf meatball.
                    Turducken burgdoggen chuck, buffalo short loin corned beef
                    tongue pork belly beef pastrami t-bone swine chislic pork.
                </Text>

                <Text fontWeight={"normal"}>
                    Cupim pancetta brisket, picanha tongue short ribs fatback
                    bacon pork loin landjaeger corned beef alcatra kevin
                    bresaola pork. Pig ham buffalo pastrami meatloaf turducken
                    tongue pork chislic jowl chuck. Spare ribs bresaola sausage,
                    chislic prosciutto landjaeger meatloaf leberkas bacon pork
                    chop short ribs pig shank meatball alcatra. Turkey swine
                    brisket tail chicken fatback landjaeger meatloaf chislic
                    pastrami rump.
                </Text>

                <Text fontWeight={"medium"}>
                    Ribeye andouille jowl pig, boudin frankfurter doner meatloaf
                    pork belly hamburger meatball jerky pork loin bacon. Buffalo
                    tail ball tip pig venison beef ribs salami. Buffalo cow
                    t-bone sausage ground round picanha. Chislic pancetta
                    kielbasa, salami cow turkey tri-tip landjaeger chicken pork
                    chop swine beef hamburger. Alcatra bacon strip steak,
                    meatball prosciutto flank cow jowl ball tip sausage shankle
                    ham hock buffalo beef ground round. Swine pork chop spare
                    ribs corned beef flank, fatback leberkas cow.
                </Text>

                <Text fontWeight={"bold"}>
                    Chuck biltong bacon, pork bresaola kielbasa capicola. Ball
                    tip buffalo swine shank flank ham hock beef kielbasa
                    andouille. Sirloin venison kevin filet mignon capicola
                    sausage turkey pork belly cow meatball pork loin prosciutto
                    shoulder pork. Salami ball tip ground round filet mignon,
                    tail shankle tenderloin sausage leberkas ribeye pork.
                    Picanha pork pork belly t-bone meatball jowl andouille
                    ribeye bresaola. T-bone burgdoggen short ribs porchetta
                    jerky pig biltong ham meatball kevin hamburger meatloaf ham
                    hock sausage.
                </Text>

                <Heading as="h1" size="h1">
                    H1 HEADING
                </Heading>

                <Heading as="h2" size="h2">
                    H2 HEADING
                </Heading>

                <Heading as="h3" size="h3">
                    H3 HEADING
                </Heading>
            </Flex>
        </Box>
    )
}
