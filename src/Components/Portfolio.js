import React from 'react'
import Projects from './Projects'
export const Portfolio = () => {
  return (
      <section id='portfolio' className='section bg-primary min-h-[1400px]'>
          <div className='container mx-auto'>
              <div className='flex flex-col items-center text-center'>
                  <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
                      My lastest work
                  </h2>
                  <p className='subtitle'>
                      These are some of the works which I have developed over time, 
                      these include works in python, web development and UI
                  </p>
              </div>
              <Projects />
          </div>

      </section>
  )
}
export default Portfolio
