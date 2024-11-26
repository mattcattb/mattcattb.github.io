import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../content/projects.json';

export default function ProjectsView() {
  return (
    <Box className="flex flex-col items-center justify-center text-center min-h-[50vh] py-12 gap-16">
      <Typography 
        variant="h2" 
        com="h1" 
        gutterBottom
      >
        Projects
      </Typography>

      <Grid 
        container 
        spacing={4} 
        justifyContent="center"
        alignItems="flex-start"
        className="max-w-screen-xl mx-auto"
      >
        {projectsData.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
