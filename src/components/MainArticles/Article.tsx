import { fullScreenContext } from '@/pages/SubRoute/Layout';
import { forwardRef, useContext, useImperativeHandle, useState } from 'react';
import ArticleBrief from './ArticleBrief';
import Circle from './Circle';
import style from './index.less';
interface ArticleProps {
  mykey: number;
  title: string;
  imgUrl?: string;
  ref?: any;
  brief: string;
  tags: string;
  id: number;
}

const Article: React.FC<ArticleProps> = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    handleChange,
  }));
  const [visible, setVisible] = useState<boolean>(props.mykey === 0);
  const handleChange = (state: Boolean) => {
    state
      ? setVisible(true)
      : setTimeout(() => {
          setVisible(state);
        }, 500);
  };
  const { fullscreen, setFullscreen } =
    useContext<fullScreenContextProps>(fullScreenContext);
  const handleClick = () => {
    window?.fullpage_api?.setAllowScrolling(fullscreen);
    setFullscreen(!fullscreen);
  };

  const isOdd = props.mykey % 2 === 0;
  const handleFullscreen = () => {
    if (isOdd) {
      return fullscreen ? style.circle_left_fs : style.circle_left;
    } else {
      return fullscreen ? style.circle_right_fs : style.circle_right;
    }
  };
  const renderArr = [
    <Circle
      imgUrl={props.imgUrl}
      mykey={props.mykey}
      fullscreen={fullscreen}
    />,
    <ArticleBrief
      title={props.title}
      brief={props.brief}
      tags={props.tags}
      mykey={props.mykey}
      fullscreen={fullscreen}
      id={props.id}
      isVisible={visible}
      imgUrl={props.imgUrl}
    />,
  ];
  return (
    <div className="section">
      <div
        className={style.article}
        style={{
          display: visible ? 'flex' : 'none',
          transform: fullscreen ? '' : 'translateY(-64px)',
        }}
        id={`article${props.mykey.toString()}`}
      >
        <div
          className={handleFullscreen()}
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        >
          {isOdd ? renderArr : renderArr.reverse()}
        </div>
      </div>
    </div>
  );
});

export default Article;
