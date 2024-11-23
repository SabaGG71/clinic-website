"use client"

import { FacebookProvider, CustomChat } from "react-facebook";

export const MessengerChat = () => {
  return (
    <FacebookProvider appId="368414685596302" chatSupport>
      <CustomChat pageId="139709225903075" minimized="true" />
    </FacebookProvider>
  );
};
