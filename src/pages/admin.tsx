import dynamic from 'next/dynamic';

// @ts-expect-error If I don't add a description, next will yell at me 
const CMS = dynamic(() => import('decap-cms-app').then((cms) => {
    // @ts-expect-error If I don't add a description, next will yell at me
    cms.init()
}), {ssr: false});

export default CMS