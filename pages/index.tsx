import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return <div className='bg-slate-400 py-10 flex flex-col space-y-5'>
    <div className='bg-white p-10 rounded-2xl'></div>
    <div className='bg-white p-10 rounded-2xl'></div>
    <div className='bg-white p-10 rounded-2xl'></div>
    <div className='bg-white p-10 rounded-2xl'></div>
  </div>
}

export default Home
