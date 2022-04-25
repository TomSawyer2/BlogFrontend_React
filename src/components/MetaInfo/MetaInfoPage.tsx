import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';

interface MetaInfoPageProps {
  title: string;
  tags: string;
  imgUrl?: string;
}

const MetaInfoPage: React.FC<MetaInfoPageProps> = (props) => {
  return (
    <HelmetProvider>
      <Helmet defer={false}>
        <meta property="og:title" content={props.title} />
        <meta property="og:image" content={props.imgUrl} />
        <meta
          property="og:keywords"
          content={props.tags.split('-').join(', ')}
        />
      </Helmet>
    </HelmetProvider>
  );
};

export default MetaInfoPage;
