import React from 'react'
import Header from '../Header'
import TestimonialCard from "@/components/cards/TestimonialCard"
import { reviews } from '@/constants'
import Image from "next/image"


interface Props {
    
}

const Testimonials = (props: Props) => {
    return (
        <div>
        <section className="mt-20 flex justify-between flex-col xl:flex-row items-center  gap-16">
        
            <div>
          <p className="text-lightGray text-[1.125rem] font-[600] text-left uppercase">
            Testimonials
          </p>
          <p className="volkhov text-[3.125rem] text-title font-[700] text-left">
            What People Say About Us.
          </p>
  
          <div className="mt-[5.12rem] ">
          
                        <Image
                           src="/images/slide-indicator.png"
                           alt="slide indicator"
                           className="hidden md:block" width={60} height={60} />

              
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-[4.12rem]">
          <div className="relative">
            <TestimonialCard
              key={reviews[0].id}
              position={reviews[0].position}
              review={reviews[0].review}
              reviewerName={reviews[0].reviewerName}
              imageUrl={reviews[0].imageUrl}
            />
            <div className="absolute -bottom-[6rem] left-32 -z-10">
              <TestimonialCard
                key={reviews[1].id}
                position={reviews[1].position}
                review={reviews[1].review}
                reviewerName={reviews[1].reviewerName}
                imageUrl={reviews[1].imageUrl}
                isBackdrop
              />
            </div>
          </div>
          <div className="flex flex-col gap-16">
            <div className="hover:cursor-pointer">
              <img src="/images/chevron-up.png" alt="chevron up" />
            </div>
            <div className="hover:cursor-pointer">
              {/* <img src="/images/chevron-down.png" alt="chevron up" /> */}
                        <Image src="/images/chevron-down.png" alt="chevron down" width={20} height={20} />
                    </div>

                </div>

          <div>

                </div>

            </div>
          

  
            </section>
            <div className="mt-40 w-full">
            <Image src="/images/logo-group.png" alt="logo group" width={100} height={50} layout="responsive" />
</div>
            </div>
    )
}

export default Testimonials
