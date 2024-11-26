import React from 'react';
import { Stack, Button } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const link_data = [
  { url: 'https://github.com/mattcattb', name: 'GitHub', icon: <GitHubIcon/> },
  { url: 'https://www.linkedin.com/in/matthew-boughton-1228111a5/', name: 'LinkedIn', icon: <LinkedInIcon /> },
  { url: 'mailto:m.boughton@ufl.edu', name: 'Email', icon: <EmailIcon /> },
];

export default function SocialLinks() {
  return (
    <Stack 
      direction="row" 
      spacing={2} 
      justifyContent="center" 
      sx={{ padding: 2 }}
    >
      {link_data.map(({ url, name, icon }) => (
        <Button 
          key={url} 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          variant="contained" 
          color="primary"
          startIcon={icon}
        >
          {name}
        </Button>
      ))}
    </Stack>
  );
}
