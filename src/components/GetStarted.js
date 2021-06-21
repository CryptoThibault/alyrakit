import { Text, Button, Container } from "@chakra-ui/react";

const GetStarted = () => {
  return (
    <Container id="buy-now" py="6" my="6" bg="teal" color="white" centerContent>
      <Text fontWeight="bold" pb="6" fontSize="4xl">
        Get Started
      </Text>
      <Text fontSize="xl" pb="3">
        Get AlyraKit and save your time
      </Text>
      <Text as="i">
        Stop wasting time trying to do it the "right way" and build a site from
        scratch. AlyraKit is faster, easier, and you still have complete
        control.
      </Text>
      <Button bg="white" color="black" m="6" size="md">
        Buy now
      </Button>
    </Container>
  );
};

export default GetStarted;
