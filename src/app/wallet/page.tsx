import dynamic from "next/dynamic"

const Wallet = dynamic(() => import('@/components/Wallet'), {ssr: false})

export default function wallet () {
    return(
        <Wallet />
    )
}