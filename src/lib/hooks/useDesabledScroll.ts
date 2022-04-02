import { RefObject, useEffect } from 'react'
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'

function useDisableScroll(ref: RefObject<HTMLElement>, isOpen: boolean): void {
  useEffect(() => {
    if (!isOpen || ref.current === null) {
      return
    }

    disableBodyScroll(ref.current)

    return clearAllBodyScrollLocks
  }, [ref, isOpen])
}

export default useDisableScroll
