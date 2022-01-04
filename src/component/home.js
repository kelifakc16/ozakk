import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from '../component/heading'

import Blog from '../component/blog';
import Company from '../component/company';
import SampleContract from '../component/samplecontract';
import Enroll from '../component/enroll';
import Footer from '../component/footer';
import { Banner } from './banner';
export default function Home() {
  return (
    <>
      <Heading />
      <Banner title="We Create Community."
        description="lorem Ipsum is simply dummy text of the printing an
          typesetting industry. Lorem Ipsum has been the
            industry's."
           visible={true} 
      />
      <Blog />
      <SampleContract />
      <Company />
      <Enroll />
      <Footer />
    </>
  )
}
