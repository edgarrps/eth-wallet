'use client'
import React, { ReactNode, useState } from 'react'
import { web3 } from './Provider'

export default function Wallet() {
    const [account, setAccount] = useState<any>()
    const [balance, setBalance] = useState<ReactNode>()

    const renderWallet = () => {
        if (localStorage.getItem('wallet') && localStorage.getItem('privKey')) {
            return (
                <div className='space-y-0'>
                    <p className='font-extrabold text-green-400'>Carteira: <span className='text-white font-semibold'>{localStorage.getItem('wallet')}</span></p>
                    <p className='font-extrabold text-green-400'>Chave privada: <span className='text-white font-semibold'>{localStorage.getItem('privKey')}</span></p>
                </div>)
        } else {
            return (<></>)
        }
    }

    const createAccount = () => {
        const wallet = web3.eth.accounts.wallet.create(1)
        localStorage.setItem('wallet', wallet[0].address)
        localStorage.setItem('privKey', wallet[0].privateKey)
        setAccount(() => window.location.reload())
    }
    const getBalance = () => {
        web3.eth.getBalance((localStorage.getItem('wallet')) as string).then(value => setBalance(
            <p className='text-white font-bold font-mono'>{value}</p>
        ))
    }

    const renderBalance = () => {
        if (localStorage.getItem('wallet') && localStorage.getItem('privKey'))
            return (
                <><button className='text-white font-bold rounded-md border-2 mx-auto h-10 w-40 hover:ease-in-out duration-300 hover:shadow-green-500/50 hover:border-emerald-400/100 hover:border-2 hover:shadow-lg' onClick={getBalance}>Saldo</button>
                    <div>{balance}</div></>
            )
    }

    return (
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>): void => e.preventDefault()} className='flex flex-col space-y-5 justify-center items-center w-screen h-screen text-center bg-black'>
            {!localStorage.getItem('wallet') && !localStorage.getItem('privKey') ? <button className='text-white font-bold rounded-md border-2 mx-auto h-10 w-40 hover:ease-in-out duration-300 hover:shadow-green-500/50 hover:border-emerald-400/100 hover:border-2 hover:shadow-lg' onClick={createAccount}>Gerar carteira</button> : <></>}
            {account}
            {localStorage.getItem('wallet') && localStorage.getItem('privKey') ? renderWallet() : ''}
            {renderBalance()}
        </form>)
}