import { useEffect } from 'react'
import PagePreview from '../preview/page'
import BlogPreview from '../preview/blog'

const Admin = () => {
  useEffect(() => {
    ;(async () => {
      const CMS = (await import('netlify-cms-app')).default
      CMS.init()
      CMS.registerPreviewStyle('/output.css')
      CMS.registerPreviewTemplate('static', PagePreview)
      CMS.registerPreviewTemplate('services', PagePreview)
      CMS.registerPreviewTemplate('blog', BlogPreview)
    })()
  }, [])

  return <div />
}

export default Admin