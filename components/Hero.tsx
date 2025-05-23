import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-20 pt-36' id='top'>
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="pink"/>
        <Spotlight className="top-20 left-full h-[80vh] w-[50vw]" fill="blue"/>
        <Spotlight className="top-28 left-80 h-[80vh] w-[100vw]" fill="purple"/>
      </div>

      <div className="h-screen w-full  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vh] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            SCROLL TO EXPERIENCE
          </h2>

          <TextGenerateEffect 
            className="text-center text-[40px] md:text-5xl lg:text-9xl mb-10"
            words="BOWEI ZHANG PORTFOLIO"
          />
          

          <p className="text-center md: tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Software Engineer | Mathematician | Artist
          </p>

          <a href="#about">
            <MagicButton 
              icon={<FaLocationArrow />}
              title="Explore"
              position="right"
            />
              
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero