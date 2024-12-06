import { Box, Container, useTheme } from "@mui/material";
import { useLayoutEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "./footer.layout";
import { Navbar } from "./navbar.layout";

interface DefaultLayoutProps {
  toggle: any;
}

export const DefaultLayout = (props: DefaultLayoutProps) => {
  const theme = useTheme();

  const navbarRef = useRef<HTMLElement | null>(null); // Reference to the navbar
  const [navbarHeight, setNavbarHeight] = useState<number>(0);

  const [footerHeight, setFooterHeight] = useState(0); // State to store the footer height
  const footerRef = useRef<HTMLDivElement>(null); // Ref to the footer element

  useLayoutEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight); // Get the navbar height
    }

    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight); // Get the footer height
    }
  }, [navbarRef.current, footerRef.current]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Container component="main" sx={{ mt: 2, mb: 2 }}>
        <Navbar ref={navbarRef} toggle={props.toggle} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: `${navbarHeight}px`,
            paddingBottom: `${footerHeight}px`,
            minHeight: "100vh",
            width: "100%",
          }}
        >
          <div style={{ flex: 1 }}>
            <Outlet />
          </div>

          <div
            ref={footerRef}
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              backgroundColor: theme.palette.background.paper,
              textAlign: "center",
              boxSizing: "border-box",
            }}
          >
            <Footer />
          </div>
        </div>
      </Container>
    </Box>
  );
};
