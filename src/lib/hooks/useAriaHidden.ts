import { RefObject, useEffect } from 'react'
import { hideOthers } from 'aria-hidden'

/**
 * @see https://zenn.dev/dqn/articles/36045bb89d5d69
 */
function useAriaHidden(ref: RefObject<HTMLElement>, isOpen: boolean): void {
  useEffect(() => {
    if (!isOpen || ref.current === null) {
      return
    }

    return hideOthers(ref.current)
  }, [ref, isOpen])
}

export default useAriaHidden
