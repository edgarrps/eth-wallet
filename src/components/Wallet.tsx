'use client'
import { useEffect, useState } from 'react'
import Web3 from 'web3'



export default function Wallet() {
    const [display, setDisplay]: any = useState('')
    const createAccount = () => {
            const web3 = new Web3(Web3.givenProvider || 'wss://eth.llamarpc.com')
            const wallet = web3.eth.accounts.wallet.create(1)
            wallet && setDisplay(
                Object.keys(wallet).map((i) => {
                    return (
                        <div key={i}>
                            <p>carteira: {wallet[0].address}</p>
                            <p>chave privada: {wallet[0].privateKey}</p>
                        </div>
                    )
                })
            )
    }

    return (
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>): void => e.preventDefault()} className='flex flex-col space-y-5 justify-center items-center w-screen h-screen text-center font-bold text-white bg-blue-500'>
            <button className='rounded-md bg-blue-300 mx-auto h-10 w-40 hover:bg-blue-400' onClick={createAccount}>criar conta</button>
            <div>{display}</div>
        </form>)
}