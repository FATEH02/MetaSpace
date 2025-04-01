'use client'
import AnimatedCharacter from './play/SkinMenu/AnimatedCharacter'
import Link from 'next/link'
import BasicButton from '@/components/BasicButton'
import { Code } from '@phosphor-icons/react'

export default function Index() {
  return (
    <div className='w-full grid place-items-center h-screen gradient p-4 relative'>
      <div className='max-w-[600px] flex flex-col items-center'>
        <div>
          <h1 className='font-semibold text-3xl'>Welcome to My Multiplayer Virtual World! 
          </h1>   
          <p className='w-full text-xl my-6'>
          Step into a living, multiplayer virtual world where you can explore, interact, and connect
           in real time. Whether you're here to meet friends, discover new spaces, or just have fun, the adventure starts now. Jump in and start playing! 🚀
          </p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Link href='/app' >
            <BasicButton>
              Get Started
            </BasicButton>
          </Link>
          {/* <span className='mt-4 text-sm'>or watch a demo <a href="https://www.youtube.com/watch?v=AnhsC7Fmt20" target="_blank" rel="noopener noreferrer" className='underline'>here</a></span> */}
        </div>
        <div className='flex flex-row items-center justify-center mt-6 gap-8'>
          {/* <p className='text-sm'>created by <a href="https://www.trevdev.me/" target="_blank" rel="noopener noreferrer" className='font-bold underline'>trevdev</a></p> */}
          <div className='inline-flex flex-row items-center justify-center gap-2'>
            {/* <a href='https://github.com/trevorwrightdev/gather-clone' target="_blank" rel="noopener noreferrer" className='text-sm underline font-bold'>see the code</a> */}
            <Code className='w-4 h-4'/>
          </div>
        </div>
        <AnimatedCharacter src='/sprites/characters/Character_009.png'/>
      </div>
    </div>
  )
}
