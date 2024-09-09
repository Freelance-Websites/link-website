import dynamic from 'next/dynamic';

// @ts-ignore
const CMS = dynamic(() => import('decap-cms-app').then((cms) => {
    // @ts-ignore
    cms.init()
}), {ssr: false});

export default CMS