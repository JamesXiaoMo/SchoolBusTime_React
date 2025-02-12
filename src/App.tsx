import _AppBar from "./components/AppBar.tsx";
import CountDown from "./components/CountDown.tsx";
import Stack from "@mui/material/Stack";

function App() {
  return (
    <Stack spacing={2}>
      <_AppBar />
      <CountDown />
      <CountDown />
    </Stack>
  );
}

export default App;
