import React from 'react'
import SectionContainer from '../Section/SectionContainer'
import SectionHeader from '../Section/SectionHeader'
import projects from '@/data/projects.json'
import Project from './Project'
const Projects = () => {
  return (
    <SectionContainer id='projects'>
      <div className='section-contents mx-6 md:mx-[64px]'>
      <SectionHeader plainText='😎 Some of my' highlightText='Best Works'/>
      <div className="lg:w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {
          projects.map((project , id) =>
          (<Project key={id} thumbnail={project.thumbnail} title={project.title} 
          link={project.Link} description={project.description} languageIcons = {project.LanguageIcons}/>)
          )
        }
      </div>
      </div>
    </SectionContainer>
  )
}

export default Projects