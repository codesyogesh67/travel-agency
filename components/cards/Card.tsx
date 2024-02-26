import React from 'react'
import Image from "next/image"


interface CardProps {
    iconUrl: string
    title: string
    description:string
}

const Card = ({iconUrl,title,description}: CardProps) => {
    return (
        <div className="w-full flex justify-center">
            

        <div className="group relative flex min-h-[280px] w-full max-w-[300px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[238px]">
        
              <div className="flex flex-grow flex-col gap-6 pt-[1.91rem] pb-[2.81rem] px-[2.56rem] items-center service-card-shadow rounded-[1.75rem]">
                  
              <div className="flex items-center justify-center pt-2">
              <Image       
                  src={iconUrl}
                  alt="service icon" 
                  width={80} height={80}
                  />
              </div>
              <p className="text-[20px] font-[700]">{title}</p>
          <p className="text-normal">{description}</p>
 
            
                  </div>
    
      
                </div>
                </div>
    )
}

export default Card
