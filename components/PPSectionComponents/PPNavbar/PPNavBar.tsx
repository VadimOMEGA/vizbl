'use client'

import { useLenis } from '@studio-freight/react-lenis'

import NavButtonRight from '../../NavBar/NavButtonRight'
import GradientButton from '@/components/GradientButton'


const PPNavBar:React.FC = () => {

  const lenis = useLenis(() => {})

  return (
    <nav className='w-full sm:h-[6rem] h-[5rem] smm:px-[3.5rem] px-[1rem] flex justify-between items-end sticky left-0 top-0 z-[100]'>
      <div className='flex items-center'>

        <div className='cursor-pointer w-[3rem] h-[3rem] rounded-[1rem] bg-custom-white border border-gray-border md:flex hidden justify-center items-center' 
          onClick={() => lenis?.scrollTo(0, {
            duration: 2,
            easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
          })}>
            <img 
              src="/icons/star.svg" 
              draggable={false}
              alt="star" 
              className='w-[60%] h-[60%]'
            />
        </div>

          {/* Phone Menu */}
            {/* <HamburgerBtn /> */}
          {/* Phone Menu */}


          <div className='sm:flex hidden'>
            {
              <NavButtonRight text="Home" route='/' active={false}/>
            }
          </div>
      </div>
        <div className='flex items-center'>
          <div className='sm:flex hidden'>
            <div className='hidden'>
              <NavButtonRight text="Log In" route='/log-in' active={false}/>
            </div>
            <NavButtonRight text="Plans & Pricing" route='/plans-and-pricing' active={true}/>
          </div>
            <GradientButton text="GET STARTED" route='https://chromewebstore.google.com/detail/vizbl-get-to-know-your-fr/lcaeomijnkkglaabildphmdinpoodaho'/>
        </div>
    </nav>
  )
}

export default PPNavBar