import { useState, useEffect } from 'react'

export const useIsSmall = () => useMediaQuery('(max-width: 650px)')
export const useIsMedium = () => useMediaQuery('(max-width: 768px)')

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}
