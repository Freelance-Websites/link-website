import dynamic from 'next/dynamic';

// @ts-expect-error
const CMS = dynamic(() => import('decap-cms-app').then((cms) => {
    // @ts-expect-error
    cms.init()
}), {ssr: false});

export default CMS