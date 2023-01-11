import React from "react";

import { AppBar, Toolbar, useScrollTrigger, Typography } from "@mui/material";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import { Box } from "@mui/system";

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

const Header = () => {
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <DeveloperModeIcon color="secondary" sx={{ fontSize: "3rem" }} />
            <Typography color="secondary" variant="h6">
              Lopxhan Development
            </Typography>
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
