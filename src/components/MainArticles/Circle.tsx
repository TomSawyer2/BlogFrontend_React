import { color16 } from '@/utils/randomColor';
import style from './index.less';

interface CircleProps {
  mykey: number;
  imgUrl?: string;
  style?: React.CSSProperties;
  className?: string;
}

const Circle: React.FC<CircleProps> = (props) => {
  const bgcolor = color16();
  if (props.imgUrl)
    return (
      <img
        id={`img${props.mykey.toString()}`}
        src={props.imgUrl}
        alt={`${props.mykey}对应的图片`}
        className={style['circle_img']}
        style={{ backgroundImage: props.imgUrl, backgroundColor: bgcolor }}
      />
    );
  else
    return (
      <div
        className={style['circle']}
        style={{ backgroundColor: bgcolor }}
      ></div>
    );
};

export default Circle;
