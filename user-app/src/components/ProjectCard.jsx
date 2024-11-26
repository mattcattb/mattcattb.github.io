import React from 'react';
import { Link } from 'react-router-dom';
import { Chip, Card, CardContent, CardActions, Typography, Button } from '@mui/material';

export default function ProjectCard({ project }) {
  return (
    <Card className="flex flex-col bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 mb-6 max-w-sm mx-auto">
      <CardContent>
        <Typography variant="h5" component="div" className="text-xl font-bold text-gray-800 mb-4">
          {project.title}
        </Typography>
        <Typography variant="body2" className="text-gray-600 mb-6">
          {project.description}
        </Typography>
      </CardContent>

      {/* Grid for Technologies */}
      <div className="flex flex-wrap gap-3 mt-4 justify-center">
        {project.technologies.map((tech, index) => (
          <Chip key={index} label={tech} variant="outlined" color="primary" />
        ))}
      </div>

      <CardActions>
        <Button component={Link} to={project.link} size="small" color="primary">
          View GitHub
        </Button>
      </CardActions>
    </Card>
  );
}
