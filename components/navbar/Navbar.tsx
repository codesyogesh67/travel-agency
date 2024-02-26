import React from 'react'
import Container from '@/components/Container'
import Link from 'next/link'
import Logo from '@/components/navbar/Logo'
import NavItems from './NavItems'
import { Button } from '@/components/ui/button'
import MobileNav from './MobileNav'




const Navbar=() => {

    return (
        <div className="fixed w-full bg-white z-50 shadow-sm ">
            <div className="py-4 border-b-[1px]"
            >
                <Container>
                    <div
                        className="
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                    ">
                        
                        <Logo />
                        <nav className="hidden md:flex w-full max-w-xs">
                                    <NavItems />
                        </nav>
                        <div className="flex items-center">
                        <Button asChild className="rounded-full border-none bg-transparent text-black hover:text-black hover:bg-transparent" size="lg">
              <Link href="/sign-in">
              Login
              </Link>
                        </Button>
                        <Button asChild className=" text-black bg-themeColor border border-black" size="lg">
              <Link href="/sign-in">
                                 
                                    Sign Up
              </Link>
                            </Button>
                            <div className="ml-2">

                            <MobileNav />
                            </div>
                            </div>
                   

                    </div>
                    
                </Container>

            </div>
       
        </div>
    )
}

export default Navbar
