import React from 'react'
import Image from "next/image"
import { Button } from '../ui/button'
import Link from 'next/link'

interface Props {
    
}

const Banner = (props: Props) => {
    return (
        <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
       
          <div className="flex flex-col justify-center">
          <p className="text-[1.128rem] font-[700] text-primary uppercase">
          Best Destinations around the world
        </p>
       
            <h1 className="my-4 font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px]  xl:text-[58px] xl:leading-[74px]">
              Travel,enjoy and live a new and full life
            </h1>
            <p className=" my-4">
            Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.</p>
            <Button size="lg" asChild className="mt-4 button w-full bg-themeColor text-white bg-black sm:w-fit">
              <Link href="#events">
                Find out more
              </Link>
            </Button>
          </div>

          <Image 
            src="/images/banner.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section> 
    )
}

export default Banner
