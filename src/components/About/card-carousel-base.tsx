import React from "react";
import { Card, Carousel } from "./card-carousel";
import Image1 from "../../../public/vertimage1.jpg";
import Image2 from "../../../public/vertimage2.jpg";
import Image3 from "../../../public/vertimage3.jpg";
import Image4 from "../../../public/vertimage4.jpg";
import Image5 from "../../../public/vertimage5.jpg";
import Image6 from "../../../public/vertimage6.jpg";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "AAPT",
    title: "AAPT Conference",
    src: Image1,
  },
  {
    category: "TELESCOPE",
    title: "Arizona?",
    src: Image2,
  },
  {
    category: "Arizona Mountain",
    title: "So cute",
    src: Image3,
  },
  {
    category: "AAPT Conference ",
    title: "Girl Splaining",
    src: Image4,
  },
  {
    category: "JSHS",
    title: "Copped a Medal!!!",
    src: Image5,
  },
  {
    category: "Women in STEM",
    title: "THE Women in Stem",
    src: Image6,
  },
];
