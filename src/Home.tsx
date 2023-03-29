import { useState } from 'react'
import Button from './components/Button/Button';
import Navbar from './components/Navbar/Navbar';
import PlayButton from './components/PlayButton/PlayButton';
import Tshirts from './assets/tshirts.png';

const Home = () => {
  return (
    <main>
      <Navbar  />
      <header>
        <div className='absolute left-0 flex flex-col justify-center items-center h-screen pt-36'>
          <h2 className='font-sans text-8xl text-center tracking-wider font-light text-white p-8'>Ideas Worth Wearing</h2>
          <h3 className='font-sans text-3xl text-center tracking-wide font-normal text-white px-24 mb-[20rem]'>T-Shirts with meaningful stories, lessons and ideas</h3>
          <PlayButton />
          <p className='uppercase text-white p-5 tracking-widest'>Play Video</p>
        </div>
        <div className="h-screen bg-no-repeat bg-cover bg-center bg-[url('/src/assets/rocket-spacex.jpg')] bg-black bg-opacity-50 bg-blend-darken -z-10"></div>
      </header>

      <section className='h-screen flex flex-col bg-[var(--color-secondary)] justify-center items-center'>
          <p className='text-4xl font-medium text-center tracking-wider leading-normal p-12 mb-48'>We believe that the T-shirts we wear are an outward expression of a belief inside of us. It is our hope that our ideas and products will inspire you to live a more meaningful life.</p>
          <Button className="mb-20" >Learn More</Button>
          <img src={Tshirts} alt="tshirts"/>
      </section>
    </main>
  )
}

export default Home;
