"use client";

import { Menu, Button, Portal } from "@chakra-ui/react";

export function TransportMenu() {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Transport Menu {/* TODO: Make this the selected item or "select item" if not selected */}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="car">Car</Menu.Item>
            <Menu.Item value="bus">Bus</Menu.Item>
            <Menu.Item value="train">Train</Menu.Item>
            <Menu.Item value="bike">Bike</Menu.Item>
            <Menu.Item value="walking">Walking</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}