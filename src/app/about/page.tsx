// app/about/page.tsx
"use client";

import { Grid, Container, Radio, Space } from "@mantine/core";
import { BackgroundBeams } from "@/components/General/background-beams";
import ShootingStars from "@/components/General/shooting-stars";
import { StarsBackground } from "@/components/General/stars-background";
import { InfiniteMovingCards } from "@/components/About/SpotifyCarousel";
import { useBackgroundEffect } from "@/context/BackgroundEffectContext";
import Buttons from "@/components/General/buttons";
// import { LayoutGridDemo } from "@/components/About/FullGrid";

const songs = [
  {
    src: "https://open.spotify.com/embed/track/3LGsgpx4TfxhXbr07OFKqs?utm_source=generator",
  },
  {
    src: "https://open.spotify.com/embed/track/1tNJrcVe6gwLEiZCtprs1u?utm_source=generator",
  },
  {
    src: "https://open.spotify.com/embed/track/1LvU6IFqQnXOIwJyBDb2io?utm_source=generator",
  },
  {
    src: "https://open.spotify.com/embed/track/2LtCEKs68u3RpNh4wybCF8?utm_source=generator",
  },
  {
    src: "https://open.spotify.com/embed/track/4U45aEWtQhrm8A5mxPaFZ7?utm_source=generator",
  },
];

export default function GridAsymmetrical() {
  const { backgroundEffect, setBackgroundEffect } = useBackgroundEffect();

  return (
    <div>
      <div className="relative border-4 border-white m-10 box-border ">
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
                About{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  Me.
                </span>
              </div>
            </Grid.Col>
            <Space h="lg" />
            <Grid.Col span={{ base: 12, xs: 12 }}>
              <div className="text-3xl ml-2 pr-10 font-bold text-white hover:glow">
                Interests: <i>nuclear physics, intergalactic medium, stellar evolution, autonomy in science, & more.</i>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 12 }}>
              <div className="text-3xl ml-2 pr-10 font-bold text-white hover:glow">
                Status: <i>neutral hydrogen QSO (astro)physics researcher @ UF, investigating super-massive black hole properties & m-sigma relationship w/ quasars, democratizing physics</i>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 12 }}>
              <div className="text-3xl ml-2 pr-10 font-bold text-white hover:glow">
                Hobbies: <i>astrophotography + stacking, high-powered rocket design + launch, hiking + eating</i>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 12 }}>
              <div className="text-3xl ml-2 pr-10 font-bold text-white hover:glow">
                Best Reads: <i>The Internet Con: How to Seize the Means of Computation (Cory Doctorow); Patriarchy of the Wage (Silvia Federici); Lessons in Chemistry (Bonnie Garmus); How Europe Underdeveloped Africa (Walter Rodney); Einstein&apos;s Dice and Schrödinger&apos;s Cat: How Two Great Minds Battled Quantum Randomness to Create a Unified Theory of Physics (Paul Halpern)</i>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 12 }}>
              <div className="text-3xl ml-2 pr-10 font-bold text-white hover:glow">
                Favorite Songs:
              </div>
              <div className="h-[152] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards items={songs} direction="right" speed="slow" />
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 12 }} style={{paddingTop: "50px"}}>
              <div className="text-4xl ml-2 pr-10 font-bold text-white hover:glow">
                Contact Me!
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 12 }} >
              <div className="text-3xl ml-2 pr-10 font-bold text-white hover:glow">
                kalee7798@gmail.com
              </div>
            </Grid.Col>
            {/* <LayoutGridDemo /> */}
            <Grid.Col>
            </Grid.Col>
            
          </Grid>
          <div >
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
            <Radio value="beams" label="Beams" color="violet" variant="outline" />
          </Grid.Col>
          <Grid.Col span={6}>
            <Radio value="stars" label="Stars" color="violet" variant="outline" />
          </Grid.Col>
        </Grid>
      </Radio.Group>
    </div>
  );
}
