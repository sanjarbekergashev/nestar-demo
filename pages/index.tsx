import Advertisement from "@/libs/commponents/homepage/Advertisement";
import PopularProperties from "@/libs/commponents/homepage/PopularProperties";
import TopAgents from "@/libs/commponents/homepage/TopAgents";
import TopProperties from "@/libs/commponents/homepage/TopProperties";
import TrendProperties from "@/libs/commponents/homepage/TrendProperties";
import withLayoutMain from "@/libs/commponents/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home: NextPage = () => {
  return (
    <Stack className="home-page">
      <TrendProperties />
      <PopularProperties />
      <Advertisement />
      <TopProperties />
      <TopAgents />
    </Stack>
  );
};

export default withLayoutMain(Home);
