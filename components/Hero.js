import Image from 'next/image';
import HeroInfo from './HeroInfo';

export default function Hero() {
  return (
    <div className='flex py-10 px-10 md:px-20'>
      <div className='flex-auto w-64'>
        <HeroInfo
          title='Blockchain Social Fitness App'
          text='Rewarding people for keeping fit and providing advertising services to
          clients'
        />
        <button className='bg-[#3E00FF] text-white text-[15px] font-bold py-3 px-6 rounded mt-3'>
          Download App
        </button>
      </div>

      <div className='flex-auto w-32 h-80 lg: -m-[75px] hidden lg:block px-3'>
        <img src={'/images/hero.png'} alt='hero-img' />
      </div>
    </div>
  );
}
