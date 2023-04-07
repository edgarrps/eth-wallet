"use client"
import { useEffect } from "react"
import Web3 from "web3"


export default function Wallet () {
    useEffect(() => {
        const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
       }, [])

return <></>
}