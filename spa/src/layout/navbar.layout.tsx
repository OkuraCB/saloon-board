import { LightMode } from "@mui/icons-material";
import { Grid, IconButton, useTheme } from "@mui/material";
import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  toggle: any;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>((props, ref) => {
  const theme = useTheme();

  const location = useLocation();

  const navStyles: React.CSSProperties = {
    width: "100vw",
    display: "flex",
    justifyContent: "left",
    paddingLeft: "20px",
    backgroundColor: theme.palette.background.paper,
  };

  const containerStyles: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
  };

  const linkContainerStyles: React.CSSProperties = {
    padding: "10px 15px",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "16px",
    transition: "background-color 0.3s ease, color 0.3s ease",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  };

  const defaultStyles: React.CSSProperties = {
    backgroundColor: "transparent",
    color: theme.palette.text.primary,
  };

  const activeStyles: React.CSSProperties = {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.text.primary,
  };

  const getLinkStyles = (path: string): React.CSSProperties =>
    location.pathname === path
      ? { ...linkContainerStyles, ...activeStyles }
      : { ...linkContainerStyles, ...defaultStyles };

  return (
    <Grid container spacing={2} style={containerStyles}>
      <Grid item xs={11}>
        <nav ref={ref} style={navStyles}>
          <Link to="/" style={getLinkStyles("/")}>
            Início
          </Link>
          <Link to="/partners" style={getLinkStyles("/partners")}>
            Parceiros
          </Link>
        </nav>
      </Grid>
      <Grid item xs={1} marginTop={0}>
        <IconButton onClick={props.toggle}>
          <LightMode />
        </IconButton>
      </Grid>
    </Grid>
  );
});
