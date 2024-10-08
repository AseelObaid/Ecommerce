import heroimg from '../assets/hero.png'
const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row   border border-gray-400'  >
   
      <div className=" bg-pink-200 w-full sm:w-1/2 flex justify-center items-center py-10 sm:py-0 ">

      <div className='text-gray-500 '>  
           <div className='flex gap-2 items-center'>
             <p className='w-8 md:w-12 h-[2px] bg-gray-600'></p>
              <p className='font-meduim  text-small md:text-base'>OUR BESTSALLER</p>
            </div>

            <h1 className=' prata-regular  text-3xl sm:py-3 lg:text-5xl leading-relaxed'>ROUNAQ STORE</h1>


            <div className='flex gap-2 items-center '>
              <p className='font-meduim  text-small md:text-base'>OUR BESTSALLER</p>
              <p className='w-8 md:w-12 h-[2px]  bg-gray-600'></p>
         </div>



      </div>
  
  
      </div>

      <div className=" w-full  sm:w-1/2"  alt="headerimg" >
      <img  src={heroimg}/></div>
    </div>
  )
}

export default Hero
