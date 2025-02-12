import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";

export default function _Appbar() {
  return (
    <Box>
      <AppBar style={{ backgroundColor: "#4caf50" }} position="fixed">
        <Toolbar
          sx={{ height: { md: "32px" }, alignItems: "center", display: "flex" }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar
            alt="app_logo"
            src="src/assets/app_logo.png"
            variant="square"
            sx={{ height: { md: "32px" }, mr: 1 }}
          />
          <Typography
            sx={{
              fontSize: { md: "32px" },
              fontWeight: "bold",
              flexGrow: 1,
            }}
          >
            SchoolBusTime
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "18px" },
              mr: 2,
            }}
          >
            Version.0.1
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
