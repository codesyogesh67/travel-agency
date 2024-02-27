import React from "react";
import { Input } from "../ui/input";
import Image from "next/image"
import { Button } from "@/components/ui/button";

function NewsLetterSection() {
  return (
    <div className="bg-[#DFD7F9] p-[4rem] rounded-[1.25rem] rounded-tl-extraLarge relative">
      <div className="z-20">
        <p className="text-lightGray text-[1.5rem] font-[600] text-center mb-[2.63rem]">
          Subscribe to get information, latest news and other{" "}
          <br className="hidden md:block" /> interesting offers about Jadoo
        </p>

        <div className="flex justify-between flex-col md:flex-row items-center gap-8">
          <div className="relative flex-grow z-[10]">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-white h-[3.5rem] pl-[3rem]"
            />
            <div className="absolute top-5 left-4">
                          <Image src="/images/envelop.png" alt="Envelope icon" width={20} height={20} />
            </div>
          </div>

          <Button
          
            className="w-[9.25rem] h-[3.25rem] z-[10]"
      
                  >Subscribe
                      </Button>
        </div>
      </div>
      

    </div>
  );
}

export default NewsLetterSection;
