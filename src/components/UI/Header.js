import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Typography,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import { Box } from "@mui/system";
import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

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

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Button component={Link} to="/" color="secondary" disableRipple>
              <DeveloperModeIcon sx={{ fontSize: "3rem" }} />
              <Typography variant="h4">Lopxhan Development</Typography>
            </Button>
            <Tabs
              sx={{ marginLeft: "auto" }}
              aria-label="secondary tabs example"
            >
              <TabComponent label="Home" component={Link} to="/" value="/" />
              <TabComponent
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                label="Services"
                component={Link}
                to="/services"
                value="/services"
                onClick={handleClick}
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
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                Custom Software Development
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                Mobile App Development
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                Website Development
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                Desktop App Development
              </MenuItem>
            </StyledMenu>
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
