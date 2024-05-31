import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer
    className='w-full pt-20 mb-[100px] md:mb-5' id='contact'>
    
    <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple"> your </span> digital presence to the next level ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>
        <a href="mailto:rishitgupta2013@gmail.com">
            <MagicButton 
                title="Let's get in touch"
                icon={<FaLocationArrow/>}
                position='right'
                >

            </MagicButton>

        </a>
    </div>

    <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6">
        <p className="md:text-base text-sm md:font-normal font-light"> Copyright @ 2024 Rishit</p>
        <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile)=>(
                <div key={profile.id} className="w-10 h-10 cutsor-pointer flex justify-center items-center background-filter background-blur-lg saturate-180 bg-opacity-75 bg-black-200 border rounded-lg border-black-300">
                     <img src={profile.img} alt={profile.id} width={20} height={20}/>
                </div>
            ))}
        </div>
    </div>
        
    </footer>
  )
}

export default Footer