import working from "../assets/working.svg";
import { Text, Box, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const ListFeatures = () => {
  const list = [
    "Lifetime updates",
    "Tons of assets",
    "Tech support",
    "Integration ready",
  ];
  return (
    <Box as="section" bg="gray.50">
      <Image
        src={working}
        alt="Illustration with a computer on the desk"
        width="400"
        height="295"
      />
      <Text fontSize="4xl" py="8px">
        The most useful resource ever created for designers
      </Text>
      <List spacing="8px" m="16px">
        {list.map((el, index) => {
          return (
            <ListItem key={index}>
              <ListIcon as={CheckCircleIcon} color="teal.300" />
              {el}
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default ListFeatures;
