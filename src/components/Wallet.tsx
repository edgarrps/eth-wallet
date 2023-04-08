'use client'
import { ReactNode, useState } from 'react'
import Web3 from 'web3'

export default function Wallet() {
    const [display, setDisplay] = useState<ReactNode>()
    const createAccount = () => {
        const web3 = new Web3(Web3.givenProvider || 'wss://eth.llamarpc.com')
        const wallet = web3.eth.accounts.wallet.create(1)
        localStorage.setItem('wall', wallet[0].address)
        localStorage.setItem('privKey', wallet[0].privateKey)
        setDisplay(
            <>
                <p className='font-extrabold text-green-400'>Carteira: <span className='text-white font-semibold'>{localStorage.getItem('wall')}</span></p>
                <p className='font-extrabold text-green-400'>Chave privada: <span className='text-white font-semibold'>{localStorage.getItem('privKey')}</span></p>
            </>
        )
    }

    return (
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>): void => e.preventDefault()} className='flex flex-col space-y-5 justify-center items-center w-screen h-screen text-center bg-black'>
            <button className='text-white font-bold rounded-md border-2 mx-auto h-10 w-40 hover:ease-in-out duration-300 hover:shadow-green-500/50 hover:border-emerald-400/100 hover:border-2 hover:shadow-lg' onClick={createAccount}>Criar conta</button>
            <div>{display}</div>
        </form>)
}