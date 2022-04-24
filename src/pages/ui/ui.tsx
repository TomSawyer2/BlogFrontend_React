import PageLoading from '@/components/PageLoading/PageLoading';
import useMetaTags from 'react-metatags-hook';

const ui = () => {
  useMetaTags({
    description: `UI of TomSawyer2's Blog`,
    metas: [
      { name: 'keywords', content: `UI` },
      { name: 'url', content: `${location.href}` },
    ],
    openGraph: {
      title: `UI of TomSawyer2's Blog`,
      image: `https://blog.tomsawyer2.xyz/pics/github_avatar.jfif`,
      site_name: '博客 - TomSawyer2',
    },
  });
  return <PageLoading />;
};

export default ui;
