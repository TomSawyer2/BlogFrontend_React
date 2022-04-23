import Card from '@/components/Card/Card';
import { useEffect } from 'react';

const ui = () => {
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
          // autoHeight: true,
          pagination: {
            el: ".blog-slider__pagination",
            clickable: true,
          },
        })`;
    document.body.appendChild(script);
  }, []);
  return <Card />;
};

export default ui;
