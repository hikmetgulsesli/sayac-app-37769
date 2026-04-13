import { useState, useCallback } from 'react'

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = useCallback(() => setCount(c => c + 1), [])
  const decrement = useCallback(() => setCount(c => c - 1), [])
  const reset = useCallback(() => setCount(0), [])

  return { count, increment, decrement, reset }
}

export default useCounter
