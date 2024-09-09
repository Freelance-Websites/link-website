import dynamic from 'next/dynamic';

const CMS = dynamic(() => import('decap-cms-app').then((cms) => {
    cms.init()
}), {ssr: false});

export default CMS