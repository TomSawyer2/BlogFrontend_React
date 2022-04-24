import useMetaTags from 'react-metatags-hook';

interface MetaInfoProps {
  title: string;
  tags: string;
  imgUrl?: string;
  brief: string;
}

const MetaInfo: React.FC<MetaInfoProps> = (props) => {
  useMetaTags({
    description: `${props.brief}`,
    metas: [
      { name: 'keywords', content: `${props.tags.split('-').join(', ')}` },
      { name: 'url', content: `${location.href}` },
    ],
    openGraph: {
      title: `${props.title}`,
      type: 'article',
      image: `${props.imgUrl}`,
      site_name: '博客 - TomSawyer2',
    },
  });
  return <></>;
};

export default MetaInfo;
