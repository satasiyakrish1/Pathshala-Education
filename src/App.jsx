import { useEffect, useState } from 'react'
import { useRoute } from './hooks/useRoute'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Marquee    from './components/Marquee'
import WhySection from './components/WhySection'
import Stats      from './components/Stats'
import Courses    from './components/Courses'
import Mission    from './components/Mission'
import CTA        from './components/CTA'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

// Sub-pages
import Branch     from './components/Branch'
import FAQ        from './components/FAQ'
import Faculty    from './components/Faculty'
import NotFound   from './components/NotFound'
import Loader     from './components/Loader'
import CustomCursor from './components/CustomCursor'
import Linktree   from './components/Linktree'
import Success    from './components/Success'
import Gallery    from './components/Gallery'

export default function App() {
  const hash = useRoute()
  const [loaderDone, setLoaderDone] = useState(false)

  // Force scroll to top on refresh and redirect path-based linktree
  useEffect(() => {
    if (window.location.pathname === '/linktree' || window.location.pathname === '/linktree/') {
      window.location.replace('/#/linktree')
      return
    }
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  // Handle anchor link scrolling across views
  useEffect(() => {
    const rawHash = window.location.hash
    let targetId = ''

    if (rawHash.startsWith('/#')) {
      targetId = rawHash.replace('/#', '')
    } else if (rawHash.startsWith('#') && !rawHash.startsWith('#/')) {
      targetId = rawHash.replace('#', '')
    }

    if (targetId) {
      const el = document.getElementById(targetId)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150)
      }
    }
  }, [hash])

  const renderContent = () => {
    // Route matching
    if (hash === '#/' || hash === '') {
      return (
        <>
          {!loaderDone && <Loader onComplete={() => setLoaderDone(true)} />}
          <Hero />
          <Marquee />
          <WhySection />
          <Stats />
          <Courses />
          <Mission />
          <CTA />
          <Contact />
        </>
      )
    }

    if (hash === '#/branch')  return <Branch />
    if (hash === '#/faq')     return <FAQ />
    if (hash === '#/faculty') return <Faculty />
    if (hash === '#/linktree') return <Linktree />
    if (hash === '#/success') return <Success />
    if (hash === '#/gallery') return <Gallery />

    // Handle home anchor links like /#about or #about
    if (hash.startsWith('/#') || (hash.startsWith('#') && !hash.startsWith('#/'))) {
      return (
        <>
          {!loaderDone && <Loader onComplete={() => setLoaderDone(true)} />}
          <Hero />
          <Marquee />
          <WhySection />
          <Stats />
          <Courses />
          <Mission />
          <CTA />
          <Contact />
        </>
      )
    }

    // Route fallback
    return <NotFound />
  }

  return (
    <>
      <CustomCursor />
      {hash !== '#/linktree' && <Navbar />}
      {renderContent()}
      {hash !== '#/linktree' && <Footer />}
    </>
  )
}
