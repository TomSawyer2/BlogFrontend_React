import { color16 } from '@/utils/randomColor';
import { useState } from 'react';
import style from './index.less';

interface CircleProps {
  mykey: number;
  imgUrl?: string;
  style?: React.CSSProperties;
  className?: string;
  fullscreen?: boolean;
  onClick?: () => void;
}

const Circle: React.FC<CircleProps> = (props) => {
  const bgcolor = color16();
  if (props.imgUrl)
    return (
      <div className={props.fullscreen ? style.fullscreen_inner : null}>
        <div
          id={`img${props.mykey.toString()}`}
          className={
            props.fullscreen
              ? style['circle_img_fullscreen']
              : style['circle_img']
          }
          style={{
            backgroundImage: `url(${props.imgUrl})`,
            backgroundColor: bgcolor,
          }}
        />
      </div>
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
