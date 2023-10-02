import MetaInfoPage from '@/components/MetaInfo/MetaInfoPage';
import PageLoading from '@/components/PageLoading/PageLoading';

const ui = () => {
  return (
    <>
      <MetaInfoPage
        tags="UI"
        title={`UI of TomSawyer2's Blog`}
        imgUrl={`https://cloudreve-hanserena.oss-cn-hangzhou.aliyuncs.com/pics/venti.jpg`}
      />
      <PageLoading />
    </>
  );
};

export default ui;
