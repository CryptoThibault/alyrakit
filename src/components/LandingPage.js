import Features from "./Features";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Header from "./Header";
import ListFeatures from "./ListFeatures";
import Navigation from "./Navigation";
import Pricing from "./Pricing";
import Sample from "./Sample";
import { Box } from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <Box>
      <Navigation />
      <Header />
      <Box>
        <Features />
        <ListFeatures />
        <Sample />
        <Pricing />
        <GetStarted />
      </Box>
      <Footer />
    </Box>
  );
};

export default LandingPage;
