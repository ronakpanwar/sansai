
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/logo.png'
import { Button } from './ui/button'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StampIcon, StarIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { checkUser } from '@/lib/checkUser'


const Header = async() => {

  await checkUser();


  
  
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src={logo}
            alt="Sensai Logo"
            width={200}
            height={60}
            className="h-12 py-1 w-auto object-contain"
          />
        </Link>
        <div className='flex items-center space-x-2 md:space-x-4'>
            <SignedIn>
                <Link href={'/dashboard'}>
                 <Button variant='outline' 
                  className="hidden md:inline-flex items-center gap-2 cursor-pointer hover:bg-zinc-800">

                   <span><LayoutDashboard className='h-4 w-4' /></span>
                    Industry Insights 
                 
                 </Button>
                </Link>
            
   
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Button 
                  className="flex items-center gap-2 bg-white text-black hover:text-zinc-700 cursor-pointer ">
                   <StarIcon className='h-4 w-4' />
                   <span className="hidden md:block">Growth Tools</span>
                   <ChevronDown className='h-4 w-4 '/>
                 </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-black ">
    <DropdownMenuItem asChild>
        <Link href={'/resume'} className='flex items-center gap-2 cursor-pointer'>
        <FileText className='h-4 w-4'/>
        <span>Build Resume</span>
        </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
    <Link href={'/ai-cover-latter'} className='flex items-center gap-2 cursor-pointer'>
        <PenBox className='h-4 w-4'/>
        <span>Cover Latter</span>
        </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
    <Link href={'/interview'} className='flex items-center gap-2 cursor-pointer'>
        <GraduationCap className='h-4 w-4'/>
        <span>Interview Prep</span>
        </Link>
    </DropdownMenuItem>
  
  </DropdownMenuContent>
</DropdownMenu>
</SignedIn>
         <SignedOut>
              <SignInButton >
                  <Button variant="outline" className="cursor-pointer" >
                       Sign In
                  </Button>
              </SignInButton>
            
            </SignedOut>
            <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
            </SignedIn>
        </div>
        </nav>

      
    </header>
  )
}

export default Header
