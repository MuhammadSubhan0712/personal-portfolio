import React from 'react'

const Hero = () => {
  return (
    <section className='relative flex flex-row items-center z-20 mx-auto'>
     <div className="flex flex-col gap-[13px] items-center">
        <h1 className='text-2xl/1 text-center font-semibold block'>
        <span className='-ml-3 '></span>
        Hello I'm Muhammad Subhan Khan, I'm 
        <span className='block text-[27px] hightlight mt-2'>
         Tech Enthusiast </span>
        </h1>
        <p className='text-center text-sm mx-6'>
        I'm obsessed with code and helping startups create unique and helpful products.
        </p>

        <a className='self-center bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm' href="mailto:muhammadsubhan0712@gmail.com">Let's Connect <img src="/arrow_right_icon.svg" alt="Arrow right icon"/></a>
     </div>
    </section>
  )
}

export default Hero