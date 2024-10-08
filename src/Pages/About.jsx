import React from 'react'
import aboutimg from '../assets/about.png'
import Title from '../Component/Title.jsx'
const About = () => {
  return (
   
   <div>
       

        <div className='my-10 flex flex-col md:flex-row gap-16'>
            
        <img className='w-full md:max-w-[450px] ' src={aboutimg} />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
         <div className='text-center pt-8 text-2xl border-t '>
        <Title title1={'ABOUT'} title2={'US'} />
        </div>
        <p>Welcome to Rounaq! We are a dedicated online clothing store specializing in the latest fashion trends, aiming to provide you with a unique and delightful shopping experience. Our store was founded with a passion for meeting your needs and adding a touch of elegance to every outfit.</p>
        <p>At Rounaq, fashion is more than just clothes – it’s an expression of who you are. We are committed to bringing you collections that celebrate individuality and confidence. Our pieces are carefully curated to reflect global trends while keeping comfort and versatility at the forefront.

</p>
        </div>
        </div>
        <div className='  py-8 text-2xl '> 
            <Title title1={'WHY'} title2={'CHOOSE US'}/>
        </div>
<div className='flex flex-col md:flex-row text-sm  mb-20'>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <p>Fast Delivery</p>
        <p className='text-gray-600'>Hate waiting? So do we! That's why we offer fast, reliable shipping with delivery in just 2 days, ensuring you get your new wardrobe quickly and hassle-free.</p>
    </div>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <p>Personalized Shopping Experience
        </p>
        <p className='text-gray-600'>We make shopping not just easy but enjoyable. Our user-friendly experience and dedicated customer support ensure that you feel supported throughout your shopping journey.

</p>
    </div>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <p>Premium Quality</p>
        <p className='text-gray-600'>We prioritize quality in every piece we offer, ensuring that you receive durable and luxurious items that retain their beauty and comfort even after extended wear.

</p>
    </div>
</div>
        </div>

  )
}

export default About
