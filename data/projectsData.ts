interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Zoom',
    description: `Introducing a cutting-edge video conferencing platform designed for seamless virtual communication. This versatile app enables users to host and join high-quality video meetings from anywhere, on any device. With features like screen sharing, virtual backgrounds, and breakout rooms, it's perfect for business meetings, online classes, or casual catch-ups with friends and family.`,
    imgSrc: '/static/images/zoom.png',
    href: 'https://meetup-swart-eight.vercel.app/',
  },
  {
    title: 'Threads',
    description: `Introducing a new social media platform designed for concise, engaging conversations. This app allows users to share brief text updates, photos, and videos with their followers in a streamlined, chronological feed. Users can easily respond to posts, creating threaded discussions that encourage deeper engagement and community building. With a clean, minimalist interface, the focus remains on content and connections. Join vibrant communities, follow thought leaders, or simply share your daily musings - all in a space that prioritizes meaningful interactions over endless scrolling.`,
    imgSrc: '/static/images/threads.png',
    href: 'https://threads-app-gamma-ten.vercel.app/',
  },
  {
    title: 'Blog',
    description:
      "Here, I share my experiences, insights, and lessons learned as I navigate life's adventures. From practical tips to personal reflections, each post offers a glimpse into my journey of continuous learning. Join me as I explore new ideas, overcome challenges, and document the wisdom gained along the way.",
    imgSrc: '/static/images/blog.png',
    href: 'https://github.com/Tulasiram119/blog',
  },
]

export default projectsData
