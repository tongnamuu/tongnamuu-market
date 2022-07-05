import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return <div className='bg-slate-400 py-20 px-10 grid gap-10'>
    <div className='bg-white p-10 rounded-2xl shadow-xl'>
      <span className='font-semibold text-3xl '>Select Item</span>
      <div className="flex justify-between my-2">
        <span className="text-gray-500">Grey Chair</span>
        <span className="font-semibold">$19</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Tooly Table</span>
        <span className="font-semibold">$81</span>
      </div>
      <div className="mt-2 pt-2 border-t-2 border-dashed flex justify-between">
        <span>Total</span>
        <span className="font-semibold">$90</span>
      </div>
      <div className="mt-5 bg-blue-400 text-white p-3 text-center rounded-xl w-1/2 mx-auto">Checkout</div>
    </div>
    <div className='bg-white p-10 rounded-2xl shadow-xl'></div>
    <div className='bg-white p-10 rounded-2xl shadow-xl'></div>
    <div className='bg-white p-10 rounded-2xl shadow-xl'></div>
  </div>
}

export default Home
