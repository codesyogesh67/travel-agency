import React from "react";
import Image from "next/image"

function LogoGroupSection() {
  return (
      <div className="w-full flex justify-center mt-20">
          <div>
          <Image src="/images/logo-group.png" alt="logo group" fill />

          </div>
      
    </div>
  );
}

export default LogoGroupSection;