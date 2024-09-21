import withLayoutBasic from "@/libs/commponents/layout/LayoutBasic";
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useState } from "react";
import PropertyCard from "@/libs/commponents/property/PropertyCard";
import Filter from "@/libs/commponents/property/Filter";

const PropertyList: NextPage = () => {
  const [properties, setProperties] = useState<number[]>([1, 2, 3, 4, 5, 6]);

  return (
    <div id={"property-list-page"} style={{ position: "relative" }}>
      <Stack className="container">
        <Box className={"right"}>
          <span>Sort by</span>
          <div>
            <Button endIcon={<KeyboardArrowDownRoundedIcon />}>New</Button>
          </div>
        </Box>
        <Stack className={"property-page"}>
          <Stack className={"filter-config"}>
            <Filter />
          </Stack>
          <Stack className={"main-config"} mb={"76px"}>
            <Stack className={"list-config"}>
              {properties.map((property, index) => {
                return <PropertyCard key={index} />;
              })}
            </Stack>
            <Stack className={"pagination-config"}>
              <Stack className={"pagination-box"}>
                <Pagination
                  page={1}
                  count={5}
                  shape="circular"
                  color="primary"
                />
              </Stack>
              <Stack className={"total-result"}>
                <Typography>Total 5 properties availablee</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default withLayoutBasic(PropertyList);
