/* eslint-disable prettier/prettier */
'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from '@/components/Image'

const Avatar: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null)

  const [style, setStyle] = useState<React.CSSProperties>({})

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current || window.innerWidth < 1280) return

    const { clientX, clientY } = e
    const rect = ref.current.getBoundingClientRect()
    const mouseX = Math.abs(clientX - rect.x)
    const mouseY = Math.abs(clientY - rect.y)
    const rotateMin = -15
    const rotateMax = 15
    const rotateRange = rotateMax - rotateMin

    const rotate = {
      x: rotateMax - (mouseY / rect.height) * rotateRange,
      y: rotateMin + (mouseX / rect.width) * rotateRange,
    }

    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    })
  }, [])

  const onMouseLeave = useCallback(() => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' })
  }, [])

  useEffect(() => {
    const current = ref.current

    if (!current) return

    current.addEventListener('mousemove', onMouseMove)
    current.addEventListener('mouseleave', onMouseLeave)

    return () => {
      if (!current) return

      current.removeEventListener('mousemove', onMouseMove)
      current.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [onMouseLeave, onMouseMove])

  return (
    <div
      className="z-10 scale-100 transition-all duration-200 ease-out hover:z-50 hover:scale-[1.02]"
      style={{ perspective: '800px' }}
      ref={ref}
    >
      <div
        style={style}
        className="max-h-[430px] overflow-hidden rounded-md transition-all duration-200 ease-out"
      >
        <Image
          src="/static/images/avatar.jpg"          
          alt="avatar"
          width={430}
          height={350}
        />
      </div>
    </div>
  )
}

export default Avatar
