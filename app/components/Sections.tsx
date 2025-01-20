import React from 'react'
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Skills/Contact';



const Sections = () => {
  return (
    <main className='flex flex-col gap-[142px] w-full md:max-w-secreen-lg pt-[236px] md:pt-60 mx-auto'>
    <Hero/>
    <Skills/>
    <Projects/>
    <Contact/>
    </main>
  )
}

export default Sections;