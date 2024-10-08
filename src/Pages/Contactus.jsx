import contactimg from '../assets/contactus.png'
import Title from '../Component/Title.jsx'

const Contactus = () => {
  return (
    <div>
      <div className='my-10 flex flex-col md:flex-row justify-center gap-10 mb-20'>
        <img className='w-full md:max-w-[480px]' src={contactimg} alt="Contact Us" />
        <div className='flex flex-col justify-center items-start gap-4'>
          <div className='text-center py-10 text-2xl '>
            <Title title1={'CONTACT'} title2={'US'} />
          </div>
          <p className='font-semibold text-xl text-black-500'>Our Location:</p>
          <p className='text-xs text-gray-600'>
            <span className='pe-3'>
              <i className="fa-solid fa-location-dot"></i>
            </span>
            Palestine - Jenin, Abu Bakr Street
          </p>
          <p className='font-semibold text-xl text-black-500'>Email:</p>
          <p className='text-xs text-gray-600'>
            <a href="mailto:aseel@rounaq.com" className='flex items-center'>
              <span className='pe-3'>
                <i className="fa-regular fa-envelope"></i>
              </span>
              aseel@rounaq.com
            </a>
          </p>
          <p className='font-semibold text-xl text-black-500'>Tel:</p>
          <p className='text-xs text-gray-600'>
            <a href="tel:+71675451908" className='flex items-center'>
              <span className='pe-3'>
                <i className="fa-solid fa-phone"></i>
              </span>
              +(716) 75451908
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contactus;
