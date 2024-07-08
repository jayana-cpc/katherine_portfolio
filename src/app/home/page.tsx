"use client"
import { Grid, Skeleton, Container, Title, Button } from '@mantine/core';

// const child = <Skeleton height={100} radius="md" animate={false} />;

export default function GridAsymmetrical() {
  return (
    <Container my="md">
      <Grid>
        <Grid.Col span={{ base: 12, xs: 12 }}><Title>Katherine Lee</Title></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 12 }}>    Typing out component     </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 12 }}><Skeleton height={750} radius="md" animate={true} /></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 12 }}> 
               <Grid>
                    <Grid.Col span={{base: 6, xs: 1.5}}><Button>Home</Button></Grid.Col>
                    <Grid.Col span={{base: 6, xs: 1.5}}><Button>About</Button></Grid.Col>
                    <Grid.Col span={{base: 6, xs: 1.5}}><Button>Experience</Button></Grid.Col>
                    <Grid.Col span={{base: 6, xs: 1.5}}><Button>Publications</Button></Grid.Col>

               </Grid>
        </Grid.Col>




      </Grid>
    </Container>
  );
}