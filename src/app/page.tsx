import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Skills/>
      <Experience/>
    </div>
  );
}

export default page
