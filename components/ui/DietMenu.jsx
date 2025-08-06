"use client";

import { Menu, Button, Portal } from "@chakra-ui/react";

export function DietMenu() {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Diet Menu {/* TODO: Make this the selected item or "select item" if not selected */}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="high-meat">High meat</Menu.Item>
            <Menu.Item value="average">Average</Menu.Item>
            <Menu.Item value="pescitarian">Pescitarian</Menu.Item>
            <Menu.Item value="vegetarian">Vegetarian</Menu.Item>
            <Menu.Item value="vegan">Vegan</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}