import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../assets/logo.png";
import styled from "@mui/material/styles/styled";
import { ShoppingCart } from "@mui/icons-material";

const Root = styled(AppBar)({
  flexGrow: 1,
  marginBottom: "7rem",
  backgroundColor: "primary",
  boxShadow: "none",
});

const Grow = styled(Box)({
  display: "flex",
  flexGrow: 1,
  alignItems: "center", 
});

const ButtonContainer = styled(Box)({
  display: "flex",
  alignItems: "center", 
});

const Image = styled("img")({
  marginRight: "1rem",
  height: "10rem", 
});

const NoHoverIconButton = styled(IconButton)({
  "&:hover": {
    backgroundColor: "transparent", // 
  },
});

export default function Navbar() {
  return (
    <Root position="fixed">
      <Toolbar>
        <NoHoverIconButton size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <Image src={logo} alt="logo" />
        </NoHoverIconButton>
        <Typography variant="h6" color="textPrimary" component="p">
          Hello Guest
        </Typography>
        <Grow />
        <ButtonContainer>
          <Button variant="outlined" sx={{ marginRight: 1 }}>
            <strong>Sign In</strong>
          </Button>
          <Button color="inherit" sx={{ marginLeft: 1 }}>
            Login
          </Button>
          <ShoppingCart fontSize="large" color="white" />
        </ButtonContainer>
      </Toolbar>
    </Root>
  );
}
