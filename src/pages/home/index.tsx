// ui
import { Box, Center, Container, Input, Flex, Spacer, Button } from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { DragAndDropUploader, Leaderboard } from "components/common";

export function Home() {
  return (
    <Box py="4" px="4" color="blue.500" bg="white">
      {/* Container */}
      <Box maxW="container.lg" mx="auto" pb="8">
        {/* Drag and drop uploader to Koi.rocks */}
        {/* <DragAndDropUploader /> */}
        {/* Leaderboard */}
        {/* <Leaderboard /> */}

        {/*Your Code Goes Here*/}
        <br></br>

        <SimpleGrid columns={2} spacing={10}>
  <Box>
  <Box boxSize='sm'>
  <Image src='https://www.ikea.com/in/en/images/products/utespelare-gaming-chair-bomstad-black__0984819_pe816424_s5.jpg?f=s' alt='Dan Abramov' />
</Box>
  </Box>
  
  <Box>
  <Heading>Green Soul Gaming Chair</Heading>
  <Text fontSize='lg' mt='5'>Fall in love with your desk setup and extremes of comfort, The green soul gaming chair is a premium example of fine craftmanship to deliver you divine comfort and relaxation while working.</Text>
  <Button colorScheme='blue' mt='5' size='lg' >Buy Now</Button>
  </Box>
  <Box></Box>
  <Box></Box>
  <Box></Box>
</SimpleGrid>
        
      </Box>
    </Box>
  );
}
