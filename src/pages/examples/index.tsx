/* Examples */
import UseFinnieExample from "./UseFinnieExample";
import GetKoiiNftsExample from "./GetKoiiNftsExample";
import UploadNftExample from "./UploadNftExample";
// ui
import { Center, Stack } from "@chakra-ui/react";

export const Examples: React.FC = () => {
  return (
    <Center py="10" px="2" flexDir="column" color="blue.500" bg="white" w="100%" textAlign="center" minH="100%">
      <Stack spacing="8" w="100%" maxW="700px" textAlign="left" minH="0">
        <UseFinnieExample />
        <GetKoiiNftsExample />
        <UploadNftExample />
      </Stack>
    </Center>
  );
};
