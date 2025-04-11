import Image from 'next/image'
import React from 'react'
import { FEATURES } from '../constants/index'

const Features = () => {
  return (
    <section className=' flex-col flex items-center justify-center overflow-hidden bg-feature-bg bg-center bg-no-repeat pt-25 pb-20'>
      <div className='mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative w-full flex justify-end'>
          <div className='relative flex flex-1 justify-center lg:justify-start lg:min-h-[700px]'>
            <Image 
            src="/phone.png"
            alt='phone'
            width={440}
            height={1000}
            className='z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex  3xl:left-20'
            />
          </div>

          <div className='z-20 flex w-full flex-col lg:w-60%'>
            <div className='relative'>
              <Image 
              src="camp.svg"
              alt='camp'
              width={50}
              height={50}
              className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px] '
              />
              <h2 className='text-[40px] font-[700] leading-[120%] lg:text-[64px] lg:font-[700] lg:leading-[120%]'>Our Features</h2>
            </div>

            <ul className='mt-20 grid gap-10 md:grid-cols-2 lg:mr-10 lg:gap-10'>
              {FEATURES.map((feature) => (
                <FeatureItem 
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description} 
                />
              ))}
            </ul>
          </div>
      </div>
    </section>
  )
}
interface FeatureItemProps {
  title: string
  icon:string
  description: string
}

const FeatureItem = ({ title ,icon , description }: FeatureItemProps) => {
  return (
    <li className='flex w-full flex-1 flex-col items-start '>
      <div className='rounded-full p-4 lg:p-7 bg-green-500'>
        <Image 
        src={icon}
        alt='icon'
        width={28}
        height={28}
        />
      </div>

      <h2 className='text-[20px] font-[700] lg:text-[32px] lg:font-[700] lg:leading-[120%]'>
        {title}
      </h2>
      <p className='text-[16px] font-[400] mt-5 bg-white/80 text-gray-300 lg:mt-[30px] lg:bg-none'>
        {description}
      </p>
    </li>
  )
}

export default Features