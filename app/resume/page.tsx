/* eslint-disable prettier/prettier */
import { components } from '@/components/MDXComponents'
import ResumeLayout from '@/layouts/ResumeLayout'
import { allAuthors, Authors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Resume' })
export default function Resume() {
  const author = allAuthors.find((p) => p.slug === 'resume') as Authors

  return (
    <ResumeLayout content={author} toc={author.toc}>
      <MDXLayoutRenderer code={author.body.code} components={components} />
    </ResumeLayout>
  )
}
