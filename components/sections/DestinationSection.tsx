import React from 'react'
import Header from '../Header'
import ImageCard from '@/components/cards/ImageCard'
import { destinations } from '@/constants/index'

interface Props {
    
}

const DestinationSection = (props: Props) => {
    return (
        <div className="mt-20">
            <Header title="Top Selling" subtitle="Top Destinations" />
            <div className="flex flex-col gap-4 md:flex-row items-center md:justify-between mt-16 w-full">
        {destinations.map((destination) => (
          <ImageCard
            key={destination.id}
            imageUrl={destination.imageUrl}
            title={destination.title}
            duration={destination.duration}
            amount={destination.amount}
            highlighted={destination.highlighted}
          />
        ))}
      </div>
        </div>
    )
}

export default DestinationSection
