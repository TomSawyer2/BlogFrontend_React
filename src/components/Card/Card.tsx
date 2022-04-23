import './Card.scss';
import { useEffect } from 'react';

const Card: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
        var swiper = new Swiper(".blog-slider", {
          spaceBetween: 30,
          effect: "fade",
          loop: true,
          mousewheel: {
            invert: false,
          },
          pagination: {
            el: ".blog-slider__pagination",
            clickable: true,
          },
        })`;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="blog-slider">
      <div className="blog-slider__wrp swiper-wrapper">
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img
              src="https://avatars.githubusercontent.com/u/72244981?s=400&u=c6e0f639d0872bfd9f41da41669db8cba8d14e39&v=4"
              alt=""
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">GitHub</span>
            <div className="blog-slider__title">TomSawyer2</div>
            <div className="blog-slider__text"></div>
            <a
              target={'_blank'}
              href="https://github.com/TomSawyer2"
              className="blog-slider__button"
            >
              Go to GitHub
            </a>
          </div>
        </div>
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img
              src="https://portrait.gitee.com/uploads/avatars/user/2780/8341470_hanserena_1605856815.png!avatar200"
              alt=""
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">Gitee</span>
            <div className="blog-slider__title">hanserena</div>
            <div className="blog-slider__text"></div>
            <a
              target={'_blank'}
              href="https://gitee.com/hanserena/"
              className="blog-slider__button"
            >
              Go to Gitee
            </a>
          </div>
        </div>

        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img
              src="https://blog.tomsawyer2.xyz/pics/bili_avatar.jpg"
              alt=""
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">Bilibili</span>
            <div className="blog-slider__title">丨行走在云端丨</div>
            <div className="blog-slider__text"></div>
            <a
              target={'_blank'}
              href="https://space.bilibili.com/23379988"
              className="blog-slider__button"
            >
              Go to Bilibili
            </a>
          </div>
        </div>
      </div>
      <div className="blog-slider__pagination"></div>
    </div>
  );
};

export default Card;
