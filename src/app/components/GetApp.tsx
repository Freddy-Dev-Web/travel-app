import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className='flex items-center justify-center w-full px-6 lg:px-20 rounded-2xl flex-col pb-[100px]'>
      <div className='relative flex w-full  flex-col justify-between rounded-2xl gap-32 overflow-hidden bg-gray-900 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl mx-auto max-w-[1440px]'>
        <div className='z-20 flex w-full flex-1 flex-col items-start justify-center gap-12'>
          <h2 className='text-[40px] font-[700] leading-[120%] lg:text-[64px] lg:font-[700] lg:leading-[120%] xl:mx-w-[320px]'>Get for free now!</h2>
          <p className='text-[16px] font-[400] text-gray-100 '>Available on IOS and Android</p>

          <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
            <Button 
            type='button'
            title='App Store'
            icon='/apple.svg'
            variant='border-white bg-white px-8 py-3 text-green-500'
            full
            />
            <Button 
            type='button'
            title='Play Store '
            icon='/android.svg'
            variant='border-gray-20 bg-green-90 px-8 py-5 text-white'
            full
            />
          </div>
        </div>

        <div className='flex flex-1 items-center justify-end'>
          <Image 
          src="/phones.png"
          alt='phones'
          width={550}
          height={870}
          />
        </div>
      </div>
    </section>
  )
}

export default GetApp