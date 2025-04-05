import Image from "next/image"
import Button from "./Button"

const Hero = () => {
  return (
    <section className="relative mx-auto max-w-[1440px] px-6 lg:px-10 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
        <div className="absolute right-0 top-0 inset-0 bg-pattern-2 bg-cover bg-center md:-right-28 xl:-top-60" />

        {/* LEFT  */}

        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
             />
             <h1 
             className="text-[52px] font-[700] leading-[120%] lg:text-[88px] lg:font-[700] lg:leading-[120%]">
                Putuk Truno Camp Area
            </h1>
            <p className="text-[16px] font-[400] mt-16 text-gray-30 xl:max-w-[520px]">
            We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
            </p>

            <div className="my-11 flex flex-wrap gap-5">
                <div className="flex items-center gap-2">
                    {Array(5).fill(1).map((_, index) => (
                        <Image 
                        src="star.svg"
                        key={index}
                        alt="star"
                        width={24}
                        height={24}
                        />
                    ))}
                </div>

                <p className="text-[16px] font-[700] lg:text-[20px] lg:font-[700]">
                    198k
                    <span className="text-[16px] font-[400] lg:text-[20px] lg:font-[400] ml-1">Excellent reviews</span>
                </p>
            </div>

            <div className="flex flex-col w-full gap-3 sm:flex-row">
                <Button
                type="button"
                title="Download App"
                variant="border-green-50 bg-green-500 px-8 py-5 text-white" 
                />

                <Button
                type="button"
                title="How we work"
                icon="/play.svg"
                variant=" bg-white px-8 py-3 text-gray-90" 
                />
            </div>
        </div>
    </section>
  )
}

export default Hero