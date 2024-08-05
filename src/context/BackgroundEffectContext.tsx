// app/context/BackgroundEffectContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type BackgroundEffect = "beams" | "stars";

interface BackgroundEffectContextProps {
  backgroundEffect: BackgroundEffect;
  setBackgroundEffect: (effect: BackgroundEffect) => void;
}

const BackgroundEffectContext = createContext<
  BackgroundEffectContextProps | undefined
>(undefined);

export const BackgroundEffectProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [backgroundEffect, setBackgroundEffect] =
    useState<BackgroundEffect>("beams");

  return (
    <BackgroundEffectContext.Provider
      value={{ backgroundEffect, setBackgroundEffect }}
    >
      {children}
    </BackgroundEffectContext.Provider>
  );
};

export const useBackgroundEffect = (): BackgroundEffectContextProps => {
  const context = useContext(BackgroundEffectContext);
  if (context === undefined) {
    throw new Error(
      "useBackgroundEffect must be used within a BackgroundEffectProvider"
    );
  }
  return context;
};
