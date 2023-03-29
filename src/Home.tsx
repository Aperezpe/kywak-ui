import { useEffect, useState } from 'react'
import Button from './components/Button/Button';
import Navbar from './components/Navbar/Navbar';
import PlayButton from './components/PlayButton/PlayButton';
import Tshirts from './assets/tshirts.png';
import HeroHeader from './components/HeroHeader/HeroHeader';
import FeaturedDesigns from './components/FeaturedDesigns/FeaturedDesigns';

const Home = () => {
  return (
    <main>
      <Navbar  />

      <HeroHeader imageUrl='/src/assets/rocket-spacex.jpg'>
        <div className='absolute left-0 flex flex-col justify-center items-center h-screen pt-36'>
          <h2 className='font-sans text-8xl text-center tracking-wider font-light text-white p-8'>Ideas Worth Wearing</h2>
          <h3 className='font-sans text-3xl text-center tracking-wide font-normal text-white px-24 mb-[20rem]'>T-Shirts with meaningful stories, lessons and ideas</h3>
          <PlayButton />
          <p className='uppercase text-white p-5 tracking-widest'>Play Video</p>
        </div>
      </HeroHeader>

      <section className='h-screen flex flex-col bg-[var(--color-secondary)] justify-center items-center'>
          <p className='text-4xl font-medium text-center tracking-wider leading-normal p-12 mb-48'>We believe that the T-shirts we wear are an outward expression of a belief inside of us. It is our hope that our ideas and products will inspire you to live a more meaningful life.</p>
          <Button className="mb-20" >Learn More</Button>
          <img src={Tshirts} alt="tshirts" className='px-6'/>
      </section>

      <FeaturedDesigns />

      
    </main>
  )
}

export default Home;
