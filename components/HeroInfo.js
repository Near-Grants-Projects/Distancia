export default function HeroInfo({ title, text }) {
  return (
    <>
      <h1 className='font-bold text-4xl md:text-[64px] leading-tight'>
        <span className='text-[#3E00FF]'>Distancia </span> <br />
        {title}
      </h1>
      <p className='font-normal text-black text-xl leading-8 md:w-96 lg:w-3/5 mt-3'>
        {text}
      </p>
    </>
  );
}
