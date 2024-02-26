import React from 'react'
import Header from '../Header'
import Card from "@/components/cards/Card"
import {features} from "@/constants"

interface Props {
    
}

const CategorySection = (props: Props) => {
    return (
        <div className="mt-20">
            <Header title="Category" subtitle="We Offer Best Services" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6 md:justify-around mt-8 md:mt-[6.75rem]">
        {features.map((feature) => (
          <Card
            key={feature.id}
            title={feature.title}
            description={feature.description}
            iconUrl={feature.iconUrl}
          />
        ))}
            </div>
        </div>
    )
}

export default CategorySection
