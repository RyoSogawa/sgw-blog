import { RefObject, useEffect } from 'react'
import { createFocusTrap } from 'focus-trap'

type UseFocusTrapOptions = {
  ref: RefObject<HTMLElement>
  isOpen: boolean
  onClose: () => void
}

/**
 * @see https://zenn.dev/dqn/articles/36045bb89d5d69
 */
function useFocusTrap({ ref, isOpen, onClose }: UseFocusTrapOptions): void {
  useEffect(() => {
    if (!isOpen || ref.current === null) {
      return
    }

    const trap = createFocusTrap(ref.current, {
      clickOutsideDeactivates: true,
      escapeDeactivates: true,
      returnFocusOnDeactivate: true,
      onDeactivate: onClose,
    })
    trap.activate()

    return () => {
      trap.deactivate()
    }
  }, [ref, isOpen, onClose])
}

export default useFocusTrap
