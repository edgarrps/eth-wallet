'use client'
import Link from 'next/link'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { pageStyle, linkStyle, spanText, text } from './styles'

export default function Home() {
   const TextEth = () => {return <h1 className={text}><span className={twMerge(spanText, 'fadein')}>Ethereum Wallet: personal, pratice and private</span></h1>}
  const [visibleText, setVisibleText] = useState(false)
  const [visibleButton, setVisibleButton] = useState(false)
  const renderText = () => { return visibleText && TextEth() }
  setTimeout(() => { setVisibleText(true) }, 50)
  const renderButton = () => { return visibleButton && <p className={twMerge(linkStyle, 'fadein')}><Link href='/wallet'>Let's get started</Link></p> }
  setTimeout(() => { setVisibleButton(true) }, 1000)


  return (
    <div className={pageStyle}>
      <p>{renderText()}</p>
      {renderButton()}
    </div>
  )
}
