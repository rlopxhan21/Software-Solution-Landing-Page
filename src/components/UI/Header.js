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
  // const [value, setValue] = useState(window.location.pathname);

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
    fontWeight: 600,
    fontSize: "1rem",
    textTransform: "none",
    color: theme.palette.common.white,
  }));

  // const onTabChangeHandler = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Button
              component={Link}
              to="/"
              color="secondary"
              // onClick={() => setValue("/")}
              disableRipple
            >
              <DeveloperModeIcon sx={{ fontSize: "3rem" }} />
              <Typography variant="h4">Lopxhan Development</Typography>
            </Button>
            <Tabs
              sx={{ marginLeft: "auto" }}
              // value={value}
              // onChange={onTabChangeHandler}
              aria-label="secondary tabs example"
            >
              <TabComponent label="Home" component={Link} to="/" value="/" />
              <TabComponent
                label="Services"
                component={Link}
                to="/services"
                value="/services"
              />
              <TabComponent
                label="Projects"
                component={Link}
                to="/projects"
                value="/projects"
              />
              <TabComponent
                label="About Us"
                component={Link}
                to="/aboutus"
                value="/aboutus"
              />
              <TabComponent
                label="Conatct Us"
                component={Link}
                to="/contactus"
                value="/contactus"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: "50px",
                fontWeight: 600,
              }}
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
