import { useEffect } from 'react'
import PagePreview from '../preview/page'

const Admin = () => {
  useEffect(() => {
    ;(async () => {
      const CMS = (await import('netlify-cms-app')).default
      CMS.init()
      CMS.registerPreviewTemplate('static', PagePreview)
    })()
  }, [])

  return <div />
}

export default Admin