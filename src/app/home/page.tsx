"use client";
import { Grid, Container } from '@mantine/core';
import { FlipWords } from "../../components/Home/flip-words";
import { BackgroundBeams } from '@/components/General/background-beams';
import CircleAnimation from '@/components/Home/CircleAnimation';
import { useRouter } from 'next/navigation';
import Grid2 from '@/components/Home/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faOrcid } from '@fortawesome/free-brands-svg-icons';

export default function GridAsymmetrical() {
    const words = ["A S T R O  ", "Q U A N T U M  ", "N U C L E A R  ", "C O M P U T A T I O N A L  "];
    const router = useRouter();
    const toHome = () => {
        router.push('/home');
    };
    const toAbout = () => {
        router.push('/about');
    };
    const toExperience = () => {
        router.push('/experience');
    };
    const toPublications = () => {
        router.push('/publications');
    };

    return (
        <div className="relative border-4 border-white m-10 box-border h-[95vh]">
            <BackgroundBeams />
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
                        <Grid style={{ maxWidth: '100px' }}>
                            <Grid.Col>
                                <a href="https://www.linkedin.com/in/katherine-lee-aa4010256/" target="_blank" rel="noopener noreferrer">
                                    <div className="ml-2 overflow-hidden transform transition duration-300 hover:translate-x-1 hover:text-white flex items-center">
                                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                                        LinkedIn
                                    </div>
                                </a>
                            </Grid.Col>
                            <Grid.Col>
                                <a href="https://github.com/keptzin" target="_blank" rel="noopener noreferrer">
                                    <div className="ml-2 overflow-hidden transform transition duration-300 hover:translate-x-1 hover:text-white flex items-center">
                                        <FontAwesomeIcon icon={faGithub} className="mr-2" />
                                        GitHub
                                    </div>
                                </a>
                            </Grid.Col>
                            <Grid.Col>
                                <a href="https://orcid.org/0009-0009-8466-3576" target="_blank" rel="noopener noreferrer">
                                    <div className="ml-2 overflow-hidden transform transition duration-300 hover:translate-x-1 hover:text-white flex items-center">
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
                </Grid>
                <div>
                    <Grid2>
                        <div style={{ padding: '150px' }}>
                            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 transform transition duration-300 hover:-translate-y-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={toHome}>
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-customGray px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                    Home
                                </span>
                            </button>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 transform transition duration-300 hover:-translate-y-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={toAbout}>
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-customGray px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                    About
                                </span>
                            </button>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 transform transition duration-300 hover:-translate-y-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={toExperience}>
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-customGray px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                    Experience
                                </span>
                            </button>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 transform transition duration-300 hover:-translate-y-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={toPublications}>
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-customGray px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                    Publications
                                </span>
                            </button>
                        </div>
                    </Grid2>
                </div>               
            </Container>
        </div>
    );
}