import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import ArticleBrief from './ArticleBrief';
import Circle from './Circle';
import style from './index.less';
interface ArticleProps {
  mykey: number;
  title: string;
  imgUrl?: string;
  ref?: any;
  brief: string;
  tags: string[];
}

const Article: React.FC<ArticleProps> = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    handleChange,
  }));
  const [visible, setVisible] = useState<Boolean>(props.mykey === 0);
  const handleChange = (state: Boolean) => {
    state
      ? setVisible(true)
      : setTimeout(() => {
          setVisible(state);
        }, 500);
  };
  const renderArr = [
    <Circle imgUrl={props.imgUrl} mykey={props.mykey} />,
    <ArticleBrief
      title={props.title}
      brief={props.brief}
      tags={props.tags}
      mykey={props.mykey}
    />,
  ];
  const isOdd = props.mykey % 2 === 0;
  return (
    <div className="section">
      <div
        className={style.article}
        style={{
          display: visible ? 'flex' : 'none',
          transform: 'translateY(-64px)',
        }}
        id={`article${props.mykey.toString()}`}
      >
        <div className={isOdd ? style.circle_left : style.circle_right}>
          {isOdd ? renderArr : renderArr.reverse()}
        </div>
      </div>
    </div>
  );
});

export default Article;
