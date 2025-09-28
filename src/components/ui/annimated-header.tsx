'use client'

import React, { useState, useEffect, useRef } from 'react'

interface AnimatedNameProps {
  className?: string
}

const AnimatedName: React.FC<AnimatedNameProps> = ({ className = '' }) => {
  const [displayName, setDisplayName] = useState('George')
  const [animatingLetters, setAnimatingLetters] = useState(new Set<number>())
  const [isIonut, setIsIonut] = useState(false)
  const nameRef = useRef<HTMLSpanElement>(null)
  const timeoutsRef = useRef<NodeJS.Timeout[]>([])

  const letterMapping: { [key: string]: string } = {
    G: 'I',
    e: 'o',
    o: 'n',
    r: 'u',
    g: 't',
  }

  const reverseMapping: { [key: string]: string } = {
    I: 'G',
    o: 'e',
    n: 'o',
    u: 'r',
    t: 'g',
  }

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout))
    }
  }, [])

  const clearTimeouts = () => {
    timeoutsRef.current.forEach((timeout) => clearTimeout(timeout))
    timeoutsRef.current = []
  }

  const animateToIonut = () => {
    clearTimeouts()
    const letters = 'George'.split('')

    letters.forEach((letter, index) => {
      if (index === 5) return

      const timeout = setTimeout(() => {
        setAnimatingLetters((prev) => new Set([...prev, index]))

        const removeTimeout = setTimeout(() => {
          setAnimatingLetters((prev) => {
            const newSet = new Set(prev)
            newSet.delete(index)
            return newSet
          })
        }, 300)

        timeoutsRef.current.push(removeTimeout)

        setDisplayName((prev) => {
          const newName = prev.split('')
          if (letterMapping[letter]) {
            newName[index] = letterMapping[letter]
          }
          if (index === 4) {
            setIsIonut(true)
            return newName.slice(0, 5).join('')
          }
          return newName.join('')
        })
      }, index * 100)

      timeoutsRef.current.push(timeout)
    })
  }

  const animateToGeorge = () => {
    clearTimeouts()
    const currentLetters = displayName.split('')

    setDisplayName((prev) => prev + 'e')

    const reverseIndices = [...currentLetters.keys()].reverse()

    reverseIndices.forEach((index, animationIndex) => {
      const letter = currentLetters[index]
      const timeout = setTimeout(
        () => {
          setAnimatingLetters((prev) => new Set([...prev, index]))

          const removeTimeout = setTimeout(() => {
            setAnimatingLetters((prev) => {
              const newSet = new Set(prev)
              newSet.delete(index)
              return newSet
            })
          }, 300)

          timeoutsRef.current.push(removeTimeout)

          setDisplayName((prev) => {
            const newName = prev.split('')
            if (reverseMapping[letter]) {
              newName[index] = reverseMapping[letter]
            }
            if (animationIndex === reverseIndices.length - 1) {
              setIsIonut(false)
            }
            return newName.join('')
          })
        },
        animationIndex * 100 + 100
      )

      timeoutsRef.current.push(timeout)
    })
  }

  const handleMouseEnter = (event: React.MouseEvent) => {
    if (!nameRef.current) return

    const rect = nameRef.current.getBoundingClientRect()
    const mouseX = event.clientX
    const elementCenter = rect.left + rect.width / 2

    const fromLeft = mouseX < elementCenter

    if (fromLeft && !isIonut) {
      animateToIonut()
    } else if (!fromLeft && isIonut) {
      animateToGeorge()
    }
  }

  return (
    <span
      ref={nameRef}
      className={`inline-block cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {displayName.split('').map((letter, index) => (
        <h1
          key={index}
          className={`inline-block transition-all duration-300 ${
            animatingLetters.has(index)
              ? 'bg-foreground text-background scale-110 animate-pulse rounded px-1'
              : ''
          }`}
          style={{
            transformStyle: 'preserve-3d',
            transform: animatingLetters.has(index)
              ? 'rotateY(180deg)'
              : 'rotateY(0deg)',
          }}
        >
          {letter}
        </h1>
      ))}
    </span>
  )
}

export default AnimatedName
