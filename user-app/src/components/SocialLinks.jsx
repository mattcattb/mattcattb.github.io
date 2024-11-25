import React from 'react'

import '../styles/SocialLinks.css';

const link_data = [
  {url:"https://github.com/mattcattb", name:'github'},
  {url:"https://www.linkedin.com/in/matthew-boughton-1228111a5/", name:'linkedin'},
  {url:"m.boughton@ufl.edu", name:"gmail"}
]

export default function SocialLinks() {
  return (
    <div className='social-links'>
      {link_data.map((data) => (
        <a 
          key={data.url} 
          href={data.url} 
          target="_blank" 
          className='social-link'
          rel="noopener noreferrer">
            {data.name}
        </a> 
      ))}
    </div>
  );
}
