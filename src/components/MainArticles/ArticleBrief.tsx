import Bubbles from '../Bubble';
import style from './ArticleBrief.css';

interface ArticleBriefProps {
  title: string;
  brief: string;
  tags: string[];
  mykey: number;
}
const ArticleBrief: React.FC<ArticleBriefProps> = (props) => {
  // const mainColor = getDominantColor(document.getElementById(`img${props.mykey}`)).r;
  return (
    <>
      <Bubbles mainColor={'#66ccff'} />
      <div className={style.articleBrief}>
        <span className={style.title}>{props.title}</span>
        <span className={style.brief}>{props.brief}</span>
        <span className={style.tag}>{props.tags}</span>
      </div>
    </>
  );
};
export default ArticleBrief;
