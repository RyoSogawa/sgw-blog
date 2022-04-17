import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { hoveringLinkState } from '../store/hoveringLinkState'

const useHoveringLink = () => {
  const [hoveringLink, setHoveringLink] = useRecoilState(hoveringLinkState)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let target = e.target as HTMLElement

      while (target?.parentElement && target.tagName !== 'HTML') {
        if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          hoveringLink || setHoveringLink(true)
          return
        }
        if (target.parentElement) target = target.parentElement
      }

      hoveringLink && setHoveringLink(false)
    }

    const handleMouseLeave = () => {
      hoveringLink && setHoveringLink(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hoveringLink, setHoveringLink])
}

export default useHoveringLink
