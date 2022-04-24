import styles from './tags.less';
import GlassCard from '@/components/GlassCard/GlassCard';
import Request from '@/apis/request';
import { useEffect, useState } from 'react';
import useMetaTags from 'react-metatags-hook';

const request = new Request();
const getAllTags = async () => {
  const result: any = await request.postData('/getAllTags', {});
  return result.data;
};

export default function IndexPage(this: any) {
  const [tags, setTags] = useState<any[]>([]);
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    const fetchAllTags = async () => {
      const result = await getAllTags();
      setTags(result);
      setRender(true);
    };
    fetchAllTags();
  }, []);

  useMetaTags({
    description: `Tags of TomSawyer2's Blog`,
    metas: [
      { name: 'keywords', content: `tag` },
      { name: 'url', content: `${location.href}` },
    ],
    openGraph: {
      title: `Tags of TomSawyer2's Blog`,
      type: 'article',
      image: `https://blog.tomsawyer2.xyz/pics/github_avatar.jfif`,
      site_name: '博客 - TomSawyer2',
    },
  });

  return (
    <div className={styles.container}>
      {render ? <GlassCard tags={tags} /> : null}
    </div>
  );
}
