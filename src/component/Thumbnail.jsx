import {FaCirclePlay} from 'react-icons/fa6'
const Thumbnail = ({image}) => {
  return (
    <div className='h-[110px] xs:h-[140px] md:h-[174px] rounded-lg overflow-clip group relative'>
      <div className='opacity-0 hover:bg-black/50 hover:opacity-100 absolute w-full h-full flex items-center justify-center transition-opacity duration-300'>
        <div className='cursor-pointer flex gap-5 p-[9px] items-center bg-white/25 rounded-3xl transition-width duration-400 w-[0px] group-hover:w-[117px]'>
          <FaCirclePlay className='h-[30px] w-[30px] opacity-0 group-hover:opacity-100 transition-opacity' />
          <p className='typographyHXSM opacity-0 group-hover:opacity-100 transition-opacity'>
            Play
          </p>
        </div>
      </div>
      <img src={image} alt={image} className='w-full h-full object-cover' />
    </div>
  )
}

export default Thumbnail
