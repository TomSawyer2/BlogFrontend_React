import styles from './tags.less';
import NavigationBar from '@/components/NavigationBar';
import GlassCard from '@/components/GlassCard/GlassCard';
import Request from '@/apis/request';
import { useEffect, useState } from 'react';

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
      console.log(result);

      setTags(result);
      setRender(true);
    };
    fetchAllTags();
  }, []);

  return (
    <div className={styles.container}>
      <NavigationBar offsetTop={1000000} tab={3} showSearch={false} />
      {render ? <GlassCard tags={tags} /> : null}
    </div>
  );
}
