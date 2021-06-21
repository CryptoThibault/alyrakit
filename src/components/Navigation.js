import { Container, List, ListItem, Link, Flex } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Container
      color="white"
      fontWeight="bold"
      bg="teal"
      maxW="auto"
      p="2"
      centerContent
    >
      <Link fontSize="2xl" href="/">
        AlyraKit
      </Link>
      <List>
        <Flex>
          <ListItem p="4">
            <Link href="/#sample">Sample</Link>
          </ListItem>
          <ListItem p="4">
            <Link href="/#pricing">Pricing</Link>
          </ListItem>
          <ListItem p="4">
            <Link href="/#buy-now">Buy now</Link>
          </ListItem>
        </Flex>
      </List>
    </Container>
  );
};

export default Navigation;
