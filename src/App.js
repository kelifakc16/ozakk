import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Heading from './components/Heading'
import Banner from './components/Banner';
import Blog from './components/blog';
import Company from './components/company';
import SampleContract from './components/samplecontract';
import Enroll from './components/enroll';
import Footer from './components/footer';

export default function App() {
  return (
    <div>
      <Heading/>
      <Banner/>
      <Blog/>
     <SampleContract/>
     <Company/>
     <Enroll/>
     <Footer/>
    </div>
  )
}

