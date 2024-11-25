import React from 'react'

import '../styles/About.css';

export default function About() {
  return (
    <section className="about-section">
        <img className='profile-picture' src="../assets/img/mattypfp.jpeg" alt="Matthew Boughton"/>
        <h1>About me!</h1>
        <p>
            Hey! My names Matthew. Im a Computer Science student at the University of Florida who loves to get his hands dirty.
            Im constantly fascinated by the world around us, and want to dive into any system I can find. You can follow my 
            github to see what im working on, or read through my blog to see a deeper dive into what im doing!
        </p>
    </section>
  )
}
