import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() =>
    import('@/components/header').then((mod) => mod.Header),{ssr: false}
);
const DynamicFooter = dynamic(() =>
    import('@/components/footer').then((mod) => mod.Footer),{ssr: false}
);

export function Layout (props:any){
    return <>
    <DynamicHeader/>
    {props.children}
    <DynamicFooter/>
    </>
}