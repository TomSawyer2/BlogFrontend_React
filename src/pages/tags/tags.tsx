import styles from './tags.less';
import GlassCard from '@/components/GlassCard/GlassCard';
import Request from '@/apis/request';
import { useEffect, useState } from 'react';
import MetaInfoPage from '@/components/MetaInfo/MetaInfoPage';

const request = new Request();
const getAllTags = async () => {
  const result: any = await request.postData('/getAllTags', {});
  return result.data;
};

export default function IndexPage() {
  const [tags, setTags] = useState<tag[]>([]);
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    const fetchAllTags = async () => {
      const result = await getAllTags();
      setTags(result);
      setRender(true);
    };
    fetchAllTags();
  }, []);

  return (
    <div className={styles.container}>
      <MetaInfoPage
        tags="tag"
        title={`Tags of TomSawyer2's Blog`}
        imgUrl={`https://cloudreve-hanserena.oss-cn-hangzhou.aliyuncs.com/pics/venti.jpg`}
      />
      {render ? <GlassCard tags={tags} /> : null}
    </div>
  );
}
