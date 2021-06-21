import { Text, Button, Container } from "@chakra-ui/react";

const GetStarted = () => {
  return (
    <Container id="buy-now" py="24">
      <Text as="span">Get Started</Text>
      <Text as="h2">Get AlyraKit and save your time</Text>
      <Text>
        Stop wasting time trying to do it the "right way" and build a site from
        scratch. AlyraKit is faster, easier, and you still have complete
        control.
      </Text>
      <Button colorScheme="teal" size="md">
        Buy now
      </Button>
    </Container>
  );
};

export default GetStarted;
