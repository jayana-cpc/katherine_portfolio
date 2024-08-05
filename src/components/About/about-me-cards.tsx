import { HoverEffect } from "./hover-cards";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Poachi",
    description: "",
    link: "https://stripe.com",
  },
  {
    title: "Billy Joel",
    description: "",
    link: "https://netflix.com",
  },
  {
    title: "Brandy Melville",
    description: "",
    link: "https://google.com",
  },
  {
    title: "Sewing",
    description: "",
    link: "https://meta.com",
  },
  {
    title: "Rocketry",
    description: "",
    link: "https://amazon.com",
  },
  {
    title: "Friends",
    description: "",
    link: "https://microsoft.com",
  },
];
