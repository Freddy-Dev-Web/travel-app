import Image from "next/image"

const Guide = () => {
  return (
    <section className="flex flex-col items-center justify-center ">
        <div className=" px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] w-auto pb-24">
          <Image src='/camp.svg' alt="Camp" width={50} height={50}/>
          <p className="uppercase text-[18px] font-[400] -mt-1 mb-3 text-green-700">
          We are here for you 
        </p>
        <div className="flex flex-wrap items-center justify-between gap-5 lg:gap-20">
          <h2 className="text-[40px] font-[700] leading-[120%] lg:text-[64px] lg:font-[700] lg:leading-[120%]">
            Guide You to Easy Path
          </h2>
          <p className="text-[14px] font-[400] text-gray-300 xl:max-x-[520px]">
          Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain
          </p>
        </div>
        </div>
        <div className="flex items-center justify-center mx-auto px-6 lg:px-20 max-w-[1440px] relative w-full">
          <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center rounded-3xl 2xl:rounded-5xl"
          />
          <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[8%] lg:top-18">
            <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
            />
               <div className="flex flex-col items-center justify-between">
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full">
                      <p className="text-[16px] font-[400] text-gray-20">Destination</p>
                      <p className="text-[16px] font-[700] text-green-500">48 min</p>
                    </div>
                    <p className="text-[20px] font-[700] mt-2">Aguas Calientes</p>
                  </div>

                  <div className="flex flex-col w-full">
                    <p className="text-[16px] font-[400] text-gray-20">Start track</p>
                    <p className="text-[20px] font-[700] mt-2 whitespace-nowrap">wonorejo Pasuruan</p>
                  </div>
               </div>
          </div>
        </div>
    </section>
  )
}

export default Guide