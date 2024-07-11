"use client";
import React from "react";
import { HoverBorderGradient } from "./buttonsBackend";

export function HoverBorderGradientDemoHome() {
  return (
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-customGray text-white flex items-center space-x-2"
      >
        <span>Home</span>
      </HoverBorderGradient>
    </div>
  );
}
