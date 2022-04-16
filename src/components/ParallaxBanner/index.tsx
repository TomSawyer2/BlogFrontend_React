import React from 'react';
import { Parallax } from 'react-parallax';

const insideStyles: React.CSSProperties = {
  color: 'white',
  fontSize: '60px',
  fontFamily: 'sans-serif',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  textAlign: 'center',
};
const image =
  'https://upload-bbs.mihoyo.com/upload/2022/03/31/307917969/9d0401ffb3fb0bb6e2884582312fb240_2463105962140725619.jpg?x-oss-process=image/auto-orient,0/interlace,1/format,jpg';

const ParallaxBanner: React.FC<any> = () => {
  const content = (
    <div id="parallaxBanner" style={{ transform: 'translateY(-64px)' }}>
      <Parallax
        bgImage={image}
        strength={1000}
        bgStyle={{
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          zoom: 1,
          minWidth: '1000px',
          backgroundSize: 'cover',
          backgroundPosition: 'center 0',
        }}
      >
        <div style={{ height: '250vh' }}>
          <div style={insideStyles}>TomSawyer2's Blog</div>
        </div>
      </Parallax>
    </div>
  );
  return content;
};

export default ParallaxBanner;
