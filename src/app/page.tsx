import Link from 'next/link'
import wallet from './wallet/page'

export default function Home() {
  return (
    <div className='flex items-center justify-center bg-black h-screen'>
      <Link className='text-white w-[150px] text-center font-bold rounded-md border-2 hover:ease-in-out duration-300 hover:shadow-green-500/50 hover:border-emerald-400/100 hover:border-2 hover:shadow-lg' href='/wallet'>Let's get started</Link>
    </div>
  )
}
