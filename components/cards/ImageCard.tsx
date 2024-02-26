import React from 'react'
import Image from "next/image"
import { BsFillSendFill } from "react-icons/bs";


interface ImageCardProps {

    imageUrl:string
    title: string
    amount: string
    duration: string
    highlighted: Boolean
}

const ImageCard = ({imageUrl,title,duration,amount,highlighted}: ImageCardProps) => {
    return (
        <div className="flex relative flex-col justify-between  pb-[2.63rem] group">
            <div className="  object-fill ">
                <Image
                 src={imageUrl}
                    alt="destination image"
                    width={200} height={200}
                    className="w-[314px] h-[20.43rem]  object-cover rounded-t-[1.5rem]"

                />
         
        </div>
        <div className="bg-white w-full mt-[1.69rem] px-[1.62rem]  group-hover:shadow-md pb-[2rem] group-hover:rounded-[1.5rem]">
          <div className="flex justify-between text-lightGray text-[1.125rem] font-bold">
            <p>{title}</p>
            <p>{amount}</p>
          </div>
          <div className="flex gap-4 items-center">
            <div>
            <BsFillSendFill />
            </div>
            <p className="text-lightGray font-bold">{duration}</p>
          </div>
        </div>
      
      </div>
    )
}

export default ImageCard
