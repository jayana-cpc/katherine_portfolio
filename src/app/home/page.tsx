// app/home/page.tsx
"use client";

import { Grid, Container, Space, Radio, Group } from '@mantine/core';
import { FlipWords } from "../../components/Home/flip-words";
import { BackgroundBeams } from '@/components/General/background-beams';
import CircleAnimation from '@/components/Home/CircleAnimation';
import Buttons from '@/components/General/buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faOrcid } from '@fortawesome/free-brands-svg-icons';
import ShootingStars from '@/components/General/shooting-stars';
import { StarsBackground } from '@/components/General/stars-background';
import { useBackgroundEffect } from '@/context/BackgroundEffectContext';

export default function GridAsymmetrical() {
  const words = ["A S T R O  ", "Q U A N T U M  ", "N U C L E A R  ", "C O M P U T A T I O N A L  "];
  

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
        <Container fluid style={{ position: 'relative', zIndex: 1 }}>
          <Grid>
            <Grid.Col span={{ base: 12, xs: 12 }}>
              <h1 className="text-8xl ml-2 font-bold text-white hover:glow">Katherine Lee</h1>
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 12 }}>
              <div className="text-5xl">
                <FlipWords words={words} />
                <h1 className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text p-1">P H Y S I C I S T</h1>
              </div>
            </Grid.Col>
            <Grid.Col>
              <Grid style={{ maxWidth: '100px',  }}>
                <Grid.Col>
                  <a href="https://www.linkedin.com/in/katherine-lee-aa4010256/" target="_blank" rel="noopener noreferrer">
                    <div className="ml-2 overflow-hidden transform transition duration-200 hover:translate-x-1 hover:text-white flex items-center">
                      <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                      LinkedIn
                    </div>
                  </a>
                </Grid.Col>
                <Grid.Col>
                  <a href="https://github.com/keptzin" target="_blank" rel="noopener noreferrer">
                    <div className="ml-2 overflow-hidden transform transition duration-2000 hover:translate-x-1 hover:text-white flex items-center">
                      <FontAwesomeIcon icon={faGithub} className="mr-2" />
                      GitHub
                    </div>
                  </a>
                </Grid.Col>
                <Grid.Col>
                  <a href="https://orcid.org/0009-0009-8466-3576" target="_blank" rel="noopener noreferrer">
                    <div className="ml-2 overflow-hidden transform transition duration-200 hover:translate-x-1 hover:text-white flex items-center">
                      <FontAwesomeIcon icon={faOrcid} className="mr-2" />
                      ORCiD
                    </div>
                  </a>
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 12 }} style={{ marginTop: '-150px' }}>
              <CircleAnimation />
            </Grid.Col>
            <Grid.Col style={{height: "200px"}}>

            </Grid.Col>

            <Grid.Col>
              <Buttons />
            </Grid.Col>
          </Grid>
                       
        </Container >
      </div >
      <Radio.Group value={backgroundEffect} onChange={(value) => setBackgroundEffect(value as "beams" | "stars")} style={{ display: 'flex', marginTop: '-33px', marginLeft: '50px' }}>
        <Grid>
          <Grid.Col span={6}>
            <Radio value="beams" label="Beams" color="violet" variant="outline" />
          </Grid.Col>
          <Grid.Col span={6}>
            <Radio value="stars" label="Stars" color="violet" variant="outline" />
          </Grid.Col>
        </Grid>
      </Radio.Group>
    </div >
  );
}
