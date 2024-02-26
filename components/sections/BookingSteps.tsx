import React from 'react'
import Image from "next/image"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { steps } from '@/constants/index'
import TripStepCard from '@/components/cards/TripStepCard'

interface Props {
    
}

const BookingSteps = (props: Props) => {
    return (
        <section className="mt-20 flex justify-between flex-col md:flex-row items-center">
      <div>
        <p className="text-lightGray text-[1.125rem] font-[600] text-left">
          Easy and Fast
        </p>
        <p className="volkhov text-[3.125rem] text-title font-[700] text-left">
          Book your next trip in 3 easy steps
        </p>

        <div className="flex flex-col gap-[3rem] mt-[1.94rem]">
          {steps.map((step) => (
            <TripStepCard
              key={step.id}
              title={step.title}
              description={step.description}
              iconUrl={step.iconUrl}
            />
          ))}
        </div>
      </div>
            <div>
                <Image
                    src="/images/next-trip.png" alt="card with a girl on a wall"
                    width={400} height={300}
                    className="w-full h-full"
                />
  
      </div>
    </section>
    )
}

export default BookingSteps

