"use client"

import { Avatar } from "@chakra-ui/react"

export function MyAvatar() {
    return(
        <Avatar.Root>
            <Avatar.Fallback name="Segun Adebayo" />
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
        </Avatar.Root>
    );
}