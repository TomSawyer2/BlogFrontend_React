import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import styles from './index.less';

const image1 =
  'https://upload-bbs.mihoyo.com/upload/2022/04/12/18643246/28371a43441da291da659d921a8637cc_7872314073706548427.jpg';
const image2 =
  'https://upload-bbs.mihoyo.com/upload/2021/09/19/11109110/0545afad441b9e40858fdeee03de7541_5412233907688564971.jpg';
const image3 =
  'https://upload-bbs.mihoyo.com/upload/2022/02/16/11114904/8c9233093ca415649bea16b93610bbb2_4881524932476610936.jpg';

const image4 =
  'https://upload-bbs.mihoyo.com/upload/2021/10/19/246137258/d58272149b7429cd5c667cb757a3b237_1388123535334324587.jpg';

const ParallaxBanner: React.FC<any> = () => {
  useEffect((): void => {
    const lastText: any = document.getElementById('lastText');
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          history.push('/home');
        }, 2000);
      }
    });
    if (lastText !== null) io.observe(lastText);
  }, []);

  return (
    <div className={styles.shell}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image1})` }}
      ></div>
      <div className={styles.heading}>
        <h1>TomSawyer2's Blog</h1>
      </div>
      <div className={styles.text}>
        <h1>Github: TomSawyer2</h1>
      </div>

      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image2})` }}
      ></div>
      <div className={styles.heading}>
        <h1 style={{ color: '#ffffffb5' }}>Design & Develop by TomSawyer2</h1>
      </div>
      <div className={styles.text}>
        <h1>Gitee: hanserena</h1>
      </div>

      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image3})` }}
      ></div>
      <div className={styles.heading}>
        <h1 style={{ color: '#ffffffb5' }}>Created by React & Umi</h1>
      </div>
      <div className={styles.text}>
        <h1>tomsawyer2@foxmail.com</h1>
      </div>

      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image4})`, height: '120vh' }}
      ></div>
      <div
        className={styles.heading}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <i id="lastText" className={styles.down}></i>
      </div>
    </div>
  );
};

export default ParallaxBanner;
