import { useState, useEffect } from 'react'

interface Props {
  text: string
  delay: number
  infinite?: boolean
}

const Typewriter = ({ text, delay, infinite = false }: Props) => {
  const [currentText, setCurrentText] = useState<string>('')
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    let timeout: any
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, delay)

    } else if (infinite) {
      setCurrentIndex(0)
      setCurrentText('')
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, infinite, text])
  return <span>{currentText}</span>
}

export default Typewriter