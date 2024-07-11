"use client"
import { Grid, Container } from '@mantine/core';
import { FlipWords } from "../../components/Home/flip-words";
import { HoverBorderGradientDemoHome } from '../../components/Home/home-button';
import { HoverBorderGradientDemoAbout } from '../../components/Home/about-button';
import { HoverBorderGradientDemoExperience } from '../../components/Home/experience-button';
import { HoverBorderGradientDemoPublications } from '../../components/Home/publications-button';
import { BackgroundBeams } from '@/components/General/background-beams';
import CircleAnimation from '@/components/Home/CircleAnimation';
export default function GridAsymmetrical() {
    const words = ["A S T R O  ", "Q U A N T U M  ", "N U C L E A R  ", "C O M P U T A T I O N A L  "];

    return (
        <div className="border-4 border-white m-10 box-border h-[95vh]">
            <Container fluid>
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
                    <Grid.Col ><CircleAnimation /></Grid.Col>
                    <Grid.Col span={{ base: 12, xs: 12 }}>
                        <Grid  >
                            <Grid.Col span={3} ><HoverBorderGradientDemoHome /></Grid.Col>
                            <Grid.Col span={3} ><HoverBorderGradientDemoAbout /></Grid.Col>
                            <Grid.Col span={3} ><HoverBorderGradientDemoExperience /></Grid.Col>
                            <Grid.Col span={3} ><HoverBorderGradientDemoPublications /></Grid.Col>
                        </Grid>
                    </Grid.Col>
                </Grid>
                <BackgroundBeams />
            </Container>
        </div>
    );
}