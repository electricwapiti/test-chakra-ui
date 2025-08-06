"use client";
import { Accordion, Icon } from "@chakra-ui/react"
import { LuChartBarStacked, LuTags } from "react-icons/lu"

export function MyAccordion() {
  return (
    <Accordion.Root multiple collapsible defaultValue={["info"]}>
      {items.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.ItemTrigger>
            <Icon fontSize="lg" color="fg.subtle">
              {item.icon}
            </Icon>
            {item.title}
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.content}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

const items = [
  {
    value: "info",
    icon: <LuTags />,
    title: "Product Info",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
  },
  {
    value: "stats",
    icon: <LuChartBarStacked />,
    title: "Stats",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
  },
]