import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/store/configureStore';

export default function Home() {
  const { user }: any = useAppSelector((state) => state.account);

  return (
    <div className='home'>
        <h1>Hello</h1>
        <p>Welcome to Grat-Culator, a way to track the gratuities you earn.</p>
        <Image className='d-block mx-auto' src='/images/Funny-Restaurant-memes-20.jpeg' alt="not found" height="290"/>
        {user && <Link className='home-link'  to="shift-collection"><p>View your shifts</p></Link> }
    </div>
  )
}