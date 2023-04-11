import Link from 'next/link'
export default function Home() {
  return (

    <div className='flex flex-col items-center justify-center bg-black h-screen space-y-10'>
      <h1 className='text-9xl text-gray-700 font-black text-center'><span className='bg-gradient-to-r from-emerald-500 to-purple-500 text-transparent bg-clip-text'>Ethereum Wallet: personal, pratice and private</span></h1>
      <div><Link className='text-white font-bold rounded-md border-2 mx-auto w-[150px] hover:ease-in-out duration-300 hover:shadow-green-500/50 hover:border-emerald-400/100 hover:border-2 hover:shadow-lg' href='/wallet'>Let's get started</Link></div>
    </div>
  )
}
