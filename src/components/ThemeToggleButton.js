import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7, BrightnessAuto } from "@mui/icons-material";
import { useColorScheme } from "@mui/material/styles";

export default function ThemeToggleButton() {
  const { mode, setMode } = useColorScheme();

  const handleToggle = () => {
    if (mode === "light") {
      setMode("dark");
    } else if (mode === "dark") {
      setMode("system");
    } else {
      setMode("light");
    }
  };

  return (
    <Tooltip title={`Switch theme (current: ${mode})`}>
      <IconButton onClick={handleToggle} color="inherit">
        {mode === "light" && <Brightness7 />}
        {mode === "dark" && <Brightness4 />}
        {mode === "system" && <BrightnessAuto />}
      </IconButton>
    </Tooltip>
  );
}
