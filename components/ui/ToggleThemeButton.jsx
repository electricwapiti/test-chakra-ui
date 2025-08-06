"use client"

import { Button } from "@chakra-ui/react";
import { useColorMode } from "./ColorMode";

export function ToggleThemeButton() {
  const { toggleColorMode } = useColorMode();
  return <Button onClick={toggleColorMode}>Toggle Mode</Button>;
}