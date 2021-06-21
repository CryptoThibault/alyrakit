import { Container, List, ListItem, Link } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Container>
      <Link href="/">AlyraKit</Link>
      <List>
        <ListItem>
          <Link href="/#sample">Sample</Link>
        </ListItem>
        <ListItem>
          <Link href="/#pricing">Pricing</Link>
        </ListItem>
        <ListItem>
          <Link href="/#buy-now">Buy now</Link>
        </ListItem>
      </List>
    </Container>
  );
};

export default Navigation;
