import style from './ArticleBrief.css';

interface ArticleBriefProps {
  title: string;
}
const ArticleBrief: React.FC<ArticleBriefProps> = (props) => {
  return (
    <>
      <div className={style.articleBrief}>
        <span className={style.title}>{props.title}</span>
        <span className={style.brief}>brief</span>
        <span className={style.tag}>tag</span>
      </div>
    </>
  );
};
export default ArticleBrief;
