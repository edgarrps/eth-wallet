'use client'
import { useEffect } from 'react'
import Web3 from 'web3'

export default function Wallet() {
    useEffect(() => {
        const web3 = new Web3(Web3.givenProvider || 'wss://eth.llamarpc.com')
        const wallet = web3.eth.accounts.wallet.create
    }, [])


    return <></>
}