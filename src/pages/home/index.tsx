// ui
import { Box, Button } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export function Home() {
  return (
    <Box py="8" px="4" color="blue.500" bg="white" minH="90vh">
      {/* Container */}
      <Box maxW="container.lg" mx="auto" pb="8">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box
            w="100%"
            minW="0"
            order={{ base: 2, md: 1 }}
            maxW={{ base: "100%", md: "sm" }}
          >
            <Image
              maxW="100%"
              mx="auto"
              src="https://www.ikea.com/in/en/images/products/utespelare-gaming-chair-bomstad-black__0984819_pe816424_s5.jpg?f=s"
              alt="Dan Abramov"
            />
          </Box>

          <Box order={{ base: 1, md: 2 }}>
            <Heading>Green Soul Gaming Chair</Heading>
            <Text fontSize="lg" mt="5">
              Fall in love with your desk setup and extremes of comfort, The
              green soul gaming chair is a premium example of fine craftmanship
              to deliver you divine comfort and relaxation while working.
            </Text>
            <Button colorScheme="blue" mt="5" size="lg">
              Buy Now
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
