import Link from 'next/link'

export default function Home() {
  return (

    <div className='flex items-center justify-center bg-black h-screen'>
      <video className='absolute w-full h-full object-cover opacity-50' src='public.mp4' muted loop autoPlay />
      <Link className='text-white w-[150px] text-center font-bold rounded-md border-2 hover:ease-in-out duration-300 hover:shadow-green-500/50 hover:border-emerald-400/100 hover:border-2 hover:shadow-lg' href='/wallet'>Let's get started</Link>
    </div>
  )
}
