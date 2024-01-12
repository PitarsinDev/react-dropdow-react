import React from 'react'

function Header() {
  return (
    <div className='p-10'>
        <div>

            <div >
                <h1 className='text-center text-4xl'>
                    Hello Im a Full Stack Dev
                </h1>
            </div>
            <div className='flex justify-center p-10'>

                <a href="/" className='border border-black rounded-full px-5 py-1 mx-4 hover:bg-black hover:text-white transition'>
                    Get Started
                </a>
                <a href="/" className='border border-black rounded-full px-5 py-1 mx-4 hover:bg-black hover:text-white transition'>
                    Readmore
                </a>

            </div>

        </div>
    </div>
  )
}

export default Header