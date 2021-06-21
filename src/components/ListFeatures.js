import working from "../assets/working.svg";
import { Text, Container, Image, List, ListItem } from "@chakra-ui/react";

const ListFeatures = () => {
  const list = [
    "Lifetime updates",
    "Tons of assets",
    "Tech support",
    "Integration ready",
  ];
  return (
    <Container>
      <Image
        src={working}
        alt="Illustration with a computer on the desk"
        width="400"
        height="295"
      />

      <Text>The most useful resource ever created for designers</Text>
      <List>
        {list.map((el, index) => {
          return <ListItem key={index}>{el}</ListItem>;
        })}
      </List>
    </Container>
  );
};

export default ListFeatures;
