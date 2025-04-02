import { useEffect } from 'react'
import PagePreview from '../preview/page'

const Admin = () => {
  useEffect(() => {
    ;(async () => {
      const CMS = (await import('netlify-cms-app')).default
      CMS.init()
      CMS.registerPreviewStyle('/output.css')
      CMS.registerPreviewTemplate('static', PagePreview)
      CMS.registerPreviewTemplate('services', PagePreview)
    })()
  }, [])

  return <div />
}

export default Admin