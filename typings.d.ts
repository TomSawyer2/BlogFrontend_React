declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module 'react-syntax-highlighter';
declare module '@fullpage/react-fullpage';
declare module 'markdown-navbar';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
