import MetaInfoPage from '@/components/MetaInfo/MetaInfoPage';
import PageLoading from '@/components/PageLoading/PageLoading';

const ui = () => {
  return (
    <>
      <MetaInfoPage
        tags="UI"
        title={`UI of TomSawyer2's Blog`}
        imgUrl={`https://blog.tomsawyer2.xyz/pics/github_avatar.jfif`}
      />
      ;
      <PageLoading />
    </>
  );
};

export default ui;
