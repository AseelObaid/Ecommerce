

const Title = ({title1,title2}) => {
  return (
    <div className=' inline-flex gap-2 mb-3 items-center'>
      <p className='text-gray-500'>{title1} <span className='text-gray-700 gap-2'>{title2}</span></p>
      <p className='bg-gray-700 h-[1px] sm:h-[2px] w-8 sm:w-12'></p>
    </div>
  )
}

export default Title
