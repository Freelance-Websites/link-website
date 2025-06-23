import { useEffect } from 'react'
import Head from 'next/head'
import PagePreview from '../preview/page'
import BlogPreview from '../preview/blog'

const Admin = () => {
  useEffect(() => {
    ;(async () => {
      const CMS = (await import('decap-cms-app')).default
      CMS.init()
      CMS.registerPreviewStyle('/output.css')
      CMS.registerPreviewTemplate('static', PagePreview)
      CMS.registerPreviewTemplate('services', PagePreview)
      CMS.registerPreviewTemplate('blog', BlogPreview)
    })()
  }, [])

  return <>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
    </Head>
  </>
}

export default Admin