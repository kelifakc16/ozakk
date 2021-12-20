import React from 'react'
import Heading from '../component/heading'
import  { AboutBanner } from '../component/banner';
import Source from '../component/source';
import Footer from '../component/footer';
import Newsletter from './newsletter';

export default function Aboutus() {
    return (
        <>

            <Heading />
            <AboutBanner title='An arch bridging  Blockchain technology to developers.'
                description="Project Ozark is a developer platform with high-security smart contract writing guidelines. Founded in 2021, Project Ozark has set industry standards for building a secure Zilliqa DAPPs."

            />
            <Source />
            <Newsletter />
            <Footer />
        </>
    )
}
