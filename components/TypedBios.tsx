/* eslint-disable prettier/prettier */
'use client'
import React from 'react'
import Typed from 'typed.js'

const TypedBios = () => {
  const el = React.useRef<HTMLElement | null>(null)
  const typed = React.useRef<Typed | null>(null)

  React.useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        stringsElement: '#bios',
        typeSpeed: 40,
        backSpeed: 10,
        loop: true,
        backDelay: 1000,
      })
    }

    return () => {
      if (typed.current) {
        typed.current.destroy()
      }
    }
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I'm aliased as <b className="font-medium">tulasiram</b> at work.
        </li>
        <li>
          I live in <b className="font-medium">Hyderabad, India</b>.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">Java</b>.
        </li>
        <li>I love web development.</li>

        <li>
          I work mostly with <b className="font-medium">Javascript/Typescript</b> technologies.
        </li>
        <li>I'm a sporty-guy. I love Cricket.</li>
        <li>I love listening to music</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}

export default TypedBios
