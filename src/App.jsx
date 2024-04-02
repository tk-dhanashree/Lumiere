import Navbar from './sections/Navbar'
import Intro from './sections/Intro'
import Touch from './sections/Touch'
import Design from './sections/Design'
import Battery from './sections/Battery'
import Base from './sections/Base'
import Background from './sections/Background'
import WebgiViewer from './sections/WebgiViewer'
import Lenis from '@studio-freight/lenis'
import Footer from './sections/Footer'
import { mobileAndTabletCheck } from "webgi"
import { useCallback, useEffect, useState } from 'react'

function App() {

  const [isMobile, setIsMobile] = useState(false);

  const setupViewer = useCallback(async () => {
    const isMobileOrTablet = mobileAndTabletCheck();
    setIsMobile(isMobileOrTablet);
  }, []);

  useEffect(() => {
    setupViewer();
  });


  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <div className='bg-gradient-to-r from-[#EFEFEF] to-[#9F9F9F]'>
      <Navbar />
      <div className='container -mt-36'>
        <Intro />
        <Touch isMobile={isMobile} />
        <Battery isMobile={isMobile} />
        <Design isMobile={isMobile} />
        <Base />
        <Footer />
        <WebgiViewer />
      </div>
    </div>
  )
}

export default App
