import React from 'react'
import PromoBanner from '../home/PromoBanner'

const About = () => {
  return (
    <div>
      <div className=' mt- 20 py-20 px-20 items-center justify-center text-black'>
      <p className=' text-black font-bold text-xl'>
        <>
      Dear readers,
      
      We offer a huge collection of books from diverse categories of Fiction, Non-fiction, Biographies, History, Religion, Self-Help, etc.
       We also offer a collection of Investments and Management, Computers, Engineering, Medical, College and School text reference books.
      We strive for customer satisfaction by offering a user-friendly search engine, efficient payment options and seamless delivery systems.
       Apart from all this, we also provide great deals and discounts on our products.
      All the Publishers, Distributors and Authors around the country are welcome to partner with us and grow the Bookswagon family. We would like to thank our customers for shopping with us. You can write to us on our e-mail id to share any suggestions or feedback you might have regarding our website or services.
      </>
      </p>
      </div>
      <PromoBanner/>
    </div>
  )
}

export default About