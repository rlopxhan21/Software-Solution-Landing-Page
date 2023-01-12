import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Typography,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Header = () => {
  function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const TabComponent = styled(Tab)(({ theme }) => ({
    color: "#fff",
    fontWeight: 600,
    fontSize: "1rem",
    textTransform: "none",
  }));

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <DeveloperModeIcon sx={{ fontSize: "3rem" }} />
            <Typography variant="h4">Lopxhan Development</Typography>
            <Tabs sx={{ marginLeft: "auto" }}>
              <TabComponent label="Home" component={Link} to="/" />
              <TabComponent label="Services" component={Link} to="/services" />
              <TabComponent label="Projects" component={Link} to="/projects" />
              <TabComponent label="Learn" component={Link} to="/learn" />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              sx={{ borderRadius: "50px", fontWeight: 600 }}
            >
              Get a Quote
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box
        sx={[
          (theme) => ({
            marginBottom: {
              ...theme.mixins.toolbar,
            },
          }),
        ]}
      />
    </React.Fragment>
  );
};

export default Header;
