import ArticleContent from '../Article/ArticleContent';
import Bubbles from '../Bubble';
import style from './ArticleBrief.css';

interface ArticleBriefProps {
  title: string;
  brief: string;
  tags: string[];
  mykey: number;
  fullscreen: boolean;
  id: number;
  isVisible: boolean;
}
const ArticleBrief: React.FC<ArticleBriefProps> = (props) => {
  // const mainColor = getDominantColor(document.getElementById(`img${props.mykey}`)).r;
  return (
    <>
      <Bubbles mainColor={'#66ccff'} />
      {props.fullscreen ? (
        <div className={style.articleContent}>
          <div
            className={style.articleContent_box}
            onClick={(e) => {
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
            }}
          >
            <div className={style.articleContent_header}>
              <span className={style.title_fs}>{props.title}</span>
              <span className={style.brief_fs}>{props.brief}</span>
              <span className={style.tag_fs}>{props.tags}</span>
            </div>
            <ArticleContent id={props.id} isVisible={props.isVisible} />
          </div>
        </div>
      ) : (
        <div className={style.articleBrief}>
          <span className={style.title}>{props.title}</span>
          <span className={style.brief}>{props.brief}</span>
          <span className={style.tag}>{props.tags}</span>
        </div>
      )}
    </>
  );
};
export default ArticleBrief;
