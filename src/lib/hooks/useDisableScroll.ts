import { RefObject, useLayoutEffect } from 'react'
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'

function useDisableScroll(ref: RefObject<HTMLElement>, isOpen: boolean): void {
  useLayoutEffect(() => {
    if (!isOpen || ref.current === null) {
      return
    }

    const storedScrollY = window.scrollY
    disableBodyScroll(ref.current, { allowTouchMove: () => true })
    document.body.style.setProperty('top', `${window.scrollY * -1}px`)

    return () => {
      clearAllBodyScrollLocks()
      document.body.style.setProperty('top', '')
      document.body.scrollTo(0, storedScrollY)
    }
  }, [ref, isOpen])
}

export default useDisableScroll
