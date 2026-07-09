import { useState, useEffect } from 'react'

export function useRoute() {
  const [hash, setHash] = useState(window.location.hash || '#/')

  useEffect(() => {
    const handleHash = () => {
      setHash(window.location.hash || '#/')
      // Auto scroll to top when changing page views
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  return hash
}
