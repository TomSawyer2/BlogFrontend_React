import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
interface MetaInfoProps {
  title: string;
  tags: string;
  imgUrl?: string;
  brief: string;
}

const MetaInfo: React.FC<MetaInfoProps> = (props) => {
  return (
    <HelmetProvider>
      <Helmet defer={false}>
        <meta property="og:title" content={props.title} />
        <meta property="og:image" content={props.imgUrl} />
        <meta property="og:tags" content={props.tags.split('-').join(', ')} />
        <meta property="description" content={props.brief} />
      </Helmet>
    </HelmetProvider>
  );
};

export default MetaInfo;
