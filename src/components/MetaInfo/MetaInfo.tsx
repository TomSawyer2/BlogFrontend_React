import { Helmet } from 'umi';
interface MetaInfoProps {
  title: string;
  tags: string;
  imgUrl?: string;
  brief: string;
}

const MetaInfo: React.FC<MetaInfoProps> = (props) => {
  return (
    <Helmet defer={false}>
      <meta property="og:title" content={props.title} />
      <meta property="og:image" content={props.imgUrl} />
      <meta property="og:tags" content={props.tags.split('-').join(', ')} />
      <meta property="description" content={props.brief} />
    </Helmet>
  );
};

export default MetaInfo;
