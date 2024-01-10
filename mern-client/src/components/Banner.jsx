import React from 'react'
import BannerCard from '../home/BannerCard'

export const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex  w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className=' md:w-1/2 space-y-8 h-full'>
                <h2 className='text-6xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span></h2>
                <p className='md:w-4/5 font-semibold text-base'>We offer a huge collection of books from diverse categories of Fiction, Non-fiction, Biographies, History, Religion, Self-Help, etc.
       We also offer a collection of Investments and Management, Computers, Engineering, Medical, College and School text reference books.
      We strive for customer satisfaction by offering a user-friendly search engine, efficient payment options and seamless delivery systems.
       Apart from all this, we also provide great deals and discounts on our products.</p>
                      <div>
                        <input type='search' name='search' id='search' placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none'/>
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                      </div>
            </div>

            {/* right side */}
            <div>
                <BannerCard></BannerCard>
            </div>
        </div>
    </div>
  )
}
