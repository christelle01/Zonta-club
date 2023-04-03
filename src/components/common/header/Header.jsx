import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container, Stack, MenuItem, Menu } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 50,
  },
  toolbar: {
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "#802528",
  },
}));

const NavigationMenu = () => {
  const classes = useStyles();
  const [isSticky, setIsSticky] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar position={isSticky ? "fixed" : "static"}>
      <Stack bgcolor={"white"}>
        <Toolbar>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "space-between" },
              pl: { md: 5 },
            }}
            maxWidth="xl"
          >
            <Link to="/">
              <img
                src={"https://www.zonta.org/images/Online/zontalogosm.png"}
                alt="logo"
                className={classes.logo}
              />
            </Link>
            <Button color="inherit">
              <Link to="/" className={classes.title}>
                ACCUEIL
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/programme" className={classes.title}>
                PROGRAMME
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/galerie" className={classes.title}>
                GALERIE
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/hotels" className={classes.title}>
                HOTELS
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/inscription" className={classes.title}>
                INSCRIPTION
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/contact" className={classes.title}>
                CONTACT
              </Link>
            </Button>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <i className="fa fa-globe"></i> LANGUES
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>ENGLISH</MenuItem>
                <MenuItem onClick={handleClose}>FRENCH</MenuItem>
              </Menu>
            </div>
          </Container>
        </Toolbar>
      </Stack>
    </AppBar>
  );
};

export default NavigationMenu;