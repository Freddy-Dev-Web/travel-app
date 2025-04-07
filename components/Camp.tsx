import Image from "next/image";
import { PEOPLE_URL } from "../constants";

interface CampProps {
  backgroundImage:string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ( {backgroundImage, title, subtitle, peopleJoined}: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1000px] ${backgroundImage} bg-cover bg-no-repeat rounded-3xl lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex items-center justify-end">
            <div className="rounded-full bg-green-500 p-4">
              <Image 
              src="/folded-map.svg"
              alt="folded-map"
              width={28}
              height={28} 
              />
            </div>
            <div className="flex flex-col gap-1">
                <h4 className="text-[16px] font-[700] text-white">{title}</h4>
                <p className="text-[14px] font-[400] text-white">{subtitle}</p>
            </div>
        </div>

        <div className="flex items-center justify-center">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={48}
              height={48}
              />
            ))}
          </span>
          <p className="text-[16px] font-[700] text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}


const Camp = () => {
  return (
    <section className=" 2xl:mx-auto 2xl:max-w-[1440px] relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
        backgroundImage="bg-[url('/img-1.png')]"
        title="Putuk Truno Camp"
        subtitle="Prigen, Pasuruan"
        peopleJoined="50+ Joined"
        />
        <CampSite  
        backgroundImage="bg-[url('/img-2.png')]"
        title="Moutain View Camp"
        subtitle="Somewhere in the Wilderness"
        peopleJoined="50+ Joined"
        />
      </div>

      <div className="flex items-center justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
            <h2 className="text-[24px] font-[400] md:text-[32px] md:font-[400] 2xl:text-[64px] 2xl:font-[400] 2xl:leading-[120%] capitalize text-white">
              <strong>Feeling Lost</strong> And Not Knowing The Way?
            </h2>
            <p className="text-[14px] font-[400] xl:text-[16px] xl:font-[400] mt:5 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. Thats why we are here for those of you who want to start an adventure
            </p>
            <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="absolute -right-6 bottom-4 w-[140px] lg:bottom-10 xl:-right-8 xl:w-[186px] 3xl:right-0" 
            />
        </div>
      </div>
    </section>
  )
}

export default Camp