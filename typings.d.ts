declare module '*.css';
declare module '*.scss';
declare module '*.less';
declare module '*.png';
declare module 'react-syntax-highlighter';
declare module '@fullpage/react-fullpage';
declare module 'qrcode';
declare module 'markdown-navbar';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
interface PrecacheEntry {
  integrity?: string;
  url: string;
  revision?: string | null;
}
interface Window {
  fullpage_api: import('@fullpage/react-fullpage').fullpageApi;
  __WB_MANIFEST: Array<PrecacheEntry | string>;
}
