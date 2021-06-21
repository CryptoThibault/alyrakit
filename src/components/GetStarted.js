import { Badge, Text, Button, Box, Container } from "@chakra-ui/react";

const GetStarted = () => {
  return (
    <Box as="section" id="buy-now" py="24" bg="teal.900" color="white">
      <Container centerContent>
        <Badge borderRadius="lg" bg="teal.800" color="muted">
          Get Started
        </Badge>
        <Text py="4" fontSize="4xl">
          Get AlyraKit and save your time
        </Text>
        <Text textAlign="center">
          Stop wasting time trying to do it the "right way" and build a site
          from scratch. AlyraKit is faster, easier, and you still have complete
          control.
        </Text>
        <Button bg="teal.500" mt="6" size="lg">
          Buy now
        </Button>
      </Container>
    </Box>
  );
};

export default GetStarted;
