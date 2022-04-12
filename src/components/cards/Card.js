// ui
import { Stack } from "@chakra-ui/react";

export function Card({ children, ...rest }) {
  return (
    <Stack p={4} rounded="md" shadow="card" bg="white" color="blue.500" {...rest}>
      {children}
    </Stack>
  );
}
