import { fullScreenContext } from '@/pages/home/home';
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
  tags: string[];
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
  const { fullscreen, setFullscreen } = useContext<any>(fullScreenContext);
  const handleClick = () => {
    window?.fullpage_api?.setAllowScrolling(fullscreen);
    setFullscreen(!fullscreen);
  };

  const isOdd = props.mykey % 2 === 0;
  const handleFullscreen: any = () => {
    if (isOdd) {
      return style.circle_left;
    } else {
      return style.circle_right;
    }
  };
  const handleTransform: any = () => {
    if (fullscreen) return 'translateX(0px)';
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
          style={{ cursor: 'pointer', transform: handleTransform() }}
        >
          {isOdd ? renderArr : renderArr.reverse()}
        </div>
      </div>
    </div>
  );
});

export default Article;
