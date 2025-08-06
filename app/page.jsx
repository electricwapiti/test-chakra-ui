"use client"

import Image from "next/image";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { useColorMode } from "../components/ui/color-mode"
import { TransportMenu } from "../components/ui/TransportMenu";
import { DietMenu } from "../components/ui/DietMenu";
import { MyAccordion } from "../components/ui/MyAccordion";

export default function Home() {
  const { toggleColorMode } = useColorMode()
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <br></br>
        <p>Test Chakra Components</p>
        <VStack>
          <HStack>
            <TransportMenu/>
            <DietMenu/>
            <Button onClick={toggleColorMode}>Toggle mode</Button>
            
          </HStack>
          <HStack>
            <MyAccordion/>
          </HStack>
        </VStack>
        
      </main>
    </div>
  );
}