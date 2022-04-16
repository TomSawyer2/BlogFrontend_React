import Circle from './Circle';
import style from './index.css';

interface ArticleBriefProps {
  title: string;
}
const ArticleBrief: React.FC<ArticleBriefProps> = (props) => {
  return <span>{props.title}</span>;
};
interface ArticleProps {
  mykey: number;
  title: string;
  imgUrl?: string;
}

const Article: React.FC<ArticleProps> = (props) => {
  const renderArr = [
    <Circle imgUrl={props.imgUrl} mykey={props.mykey} />,
    <ArticleBrief title={props.title} />,
  ];
  const isOdd = props.mykey % 2 === 0;
  return (
    <>
      <div className={style.article} id={`article${props.mykey.toString()}`}>
        <div className={isOdd ? style.circle_left : style.circle_right}>
          {isOdd ? renderArr : renderArr.reverse()}
        </div>
      </div>
    </>
  );
};

export default Article;
