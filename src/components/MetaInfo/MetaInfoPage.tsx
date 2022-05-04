import { Helmet } from 'umi';
interface MetaInfoPageProps {
  title: string;
  tags: string;
  imgUrl?: string;
}

const MetaInfoPage: React.FC<MetaInfoPageProps> = (props) => {
  return (
    <Helmet defer={false}>
      <meta property="og:title" content={props.title} />
      <meta property="og:image" content={props.imgUrl} />
      <meta property="og:keywords" content={props.tags.split('-').join(', ')} />
    </Helmet>
  );
};

export default MetaInfoPage;
