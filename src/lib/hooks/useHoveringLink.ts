import { useEffect, useState } from 'react'

const useHoveringLink = () => {
  const [hoveringLink, setHoveringLink] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let target = e.target as HTMLElement

      while (target?.parentElement && target.tagName !== 'HTML') {
        if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          if (!hoveringLink) setHoveringLink(true)
          return
        }
        if (target.parentElement) target = target.parentElement
      }

      if (hoveringLink) setHoveringLink(false)
    }

    const handleMouseLeave = () => {
      if (hoveringLink) setHoveringLink(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hoveringLink, setHoveringLink])

  return hoveringLink
}

export default useHoveringLink
