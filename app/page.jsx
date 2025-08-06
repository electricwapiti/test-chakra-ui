

import Image from "next/image";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { ColorMode } from "../components/ui/ColorMode"
import { TransportMenu } from "../components/ui/TransportMenu";
import { DietMenu } from "../components/ui/DietMenu";
import { MyAccordion } from "../components/ui/MyAccordion";
import { MyAvatar } from "../components/ui/MyAvatar";
import { UzumakiBlockquote } from "../components/ui/UzumakiBlockquote";
import { ToggleThemeButton } from "../components/ui/ToggleThemeButton";

export default function Home() {
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
            <ToggleThemeButton />
          </HStack>
          <HStack>
            <MyAccordion/>
            <MyAvatar/>
          </HStack>
          <HStack>
            <UzumakiBlockquote/>
          </HStack>
        </VStack>

        
      </main>
    </div>
  );
}