import {
  Box,
  Container,
  Stack,
  Heading,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import working from "../assets/working.svg";
import { CheckCircleIcon } from "@chakra-ui/icons";
const ListFeatures = () => {
  const list = [
    "Lifetime updates",
    "Tons of assets",
    "Tech support",
    "Integration ready",
  ];
  const bg = useColorModeValue("gray.50", "teal.700");
  return (
    <Box as="section" bg={bg} py="24">
      <Container maxW="container.lg">
        <Stack
          direction={["column", null, "row"]}
          sx={{
            gap: "2rem",
          }}
          alignItems="center"
        >
          <Box flex="1">
            <img
              src={working}
              alt="Illustration with a computer on the desk"
              width="400"
              height="295"
            />
          </Box>
          <Box flex="1">
            <Heading mb="6" fontFamily="special">
              The most useful resource ever created for designers
            </Heading>
            <List
              sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}
            >
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
        </Stack>
      </Container>
    </Box>
  );
};

export default ListFeatures;
