import React from 'react'
import { Image } from 'react-bootstrap'

export default function Home() {
  return (
    <div className='home'>
        <h1>Hello</h1>
        <p>Welcome to Grat-Culator, a way to track the gratuities you earn.</p>
        <Image className='d-block mx-auto' src='/images/Funny-Restaurant-memes-20.jpeg' alt="not found" height="290"/>
    </div>
  )
}