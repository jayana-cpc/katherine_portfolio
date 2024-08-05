"use client";
import { Grid, Container, Radio } from "@mantine/core";
import { FlipWords } from "../../components/Home/flip-words";
import { BackgroundBeams } from "@/components/General/background-beams";
import Buttons from "@/components/General/buttons";
import ShootingStars from "@/components/General/shooting-stars";
import { StarsBackground } from "@/components/General/stars-background";
import { useBackgroundEffect } from "@/context/BackgroundEffectContext";
import { AppleCardsCarouselDemo } from "@/components/About/card-carousel-base";

export default function GridAsymmetrical() {
  const words = [
    "A S T R O  ",
    "Q U A N T U M  ",
    "N U C L E A R  ",
    "C O M P U T A T I O N A L  ",
  ];

  const { backgroundEffect, setBackgroundEffect } = useBackgroundEffect();

  return (
    <div>
      <div className="relative border-4 border-white m-10 box-border">
        {backgroundEffect === "beams" && <BackgroundBeams />}
        {backgroundEffect === "stars" && (
          <>
            <ShootingStars />
            <StarsBackground />
          </>
        )}
        <Container fluid style={{ position: "relative", zIndex: 1 }}>
          <Grid>
            <Grid.Col span={{ base: 12, xs: 6 }}>
              <div className="text-8xl ml-2 pr-10 font-bold text-white hover:glow">
                Gallery
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  .
                </span>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 12 }}>
              <div className="text-5xl">
                <FlipWords words={words} />
                <h1 className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text p-1">
                  P H Y S I C I S T
                </h1>
              </div>
            </Grid.Col>

            <Grid.Col
              span={{ base: 12, xs: 12 }}
              style={{ marginTop: "-50px" }}
            >
              <AppleCardsCarouselDemo />
            </Grid.Col>
          </Grid>
          <div style={{ marginTop: "-70px" }}>
            <Buttons />
          </div>
        </Container>
      </div>
      <Radio.Group
        value={backgroundEffect}
        onChange={(value) => setBackgroundEffect(value as "beams" | "stars")}
        style={{ display: "flex", marginTop: "-33px", marginLeft: "50px" }}
      >
        <Grid>
          <Grid.Col span={6}>
            <Radio
              value="beams"
              label="Beams"
              color="violet"
              variant="outline"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Radio
              value="stars"
              label="Stars"
              color="violet"
              variant="outline"
            />
          </Grid.Col>
        </Grid>
      </Radio.Group>
    </div>
  );
}
