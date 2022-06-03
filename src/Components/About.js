import React from 'react'
import Image from '../assets/img/imgny.jpeg'

const About = () => {
  return (
    <section className='section bg-secondary'>
        <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row gap-24'>
                <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt=''/>
                <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                    <div className='flex flex-col'>
                        <h2 className='text-3xl lg:text-4xl font-medium 
                        lg:font-extrabold mb-3 before:content-about relative before:absolute 
                        before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                        Pablo Gonzalez</h2>
                        <p className='mb-4 text-accent'>
                            Freelance Web Developer
                        </p>
                        <hr className='mb-8 opacity-5'></hr>
                        <p className='mb-8'>
                        Hello, my name is Pablo Daniel Gonzalez Ramos. I am currently in my third year of computer science engineering at the Universidad del Valle de Guatemala. 
                        During my stay at the university, I have been able to obtain 2 academic awards and I have also managed to be an assistant professor of the course. of algorithms and basic programming,
                         I enjoy learning every day more about the world of programming and different technologies. I have worked during the holidays as an installer of structured cabling and atms.
                        </p>
                    </div>
                    <button className='btn btn-md bg-accent
                    hover:bg-accent-hover transition-all'>
                        Contact Me
                    </button>
                </div>
            </div>
        </div>

    </section>
  )
}

export default About