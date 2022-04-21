import { useState } from 'react';
import styles from './CircleMenu.less';

interface CircleMenuProps {
  QRCodeStatus: boolean;
  setQRCodeStatus: Function;
}

const CircleMenu: React.FC<CircleMenuProps> = (props) => {
  const [show, setShow] = useState<boolean>(false);
  const handleOpenQRCode = () => {
    props.setQRCodeStatus(!props.QRCodeStatus);
    // const input: any = document.getElementById('menu_toggler');
    // input.checked = false;
    setShow(!show);
  };

  return (
    <>
      <div className={styles.menu}>
        <input
          type="checkbox"
          className={styles['menu-toggler']}
          id="menu_toggler"
          checked={show}
          onClick={() => setShow(!show)}
          onChange={() => {}}
        />
        <label htmlFor="menu_toggler"></label>
        {/* 可以用事件委托绑到ul上 */}
        <ul>
          <li
            className={styles['menu-item']}
            onClick={(e) => console.log('todo')}
          >
            <a href="#">
              <i className={'fa fa-qq'} aria-hidden="true"></i>
            </a>
          </li>
          <li
            className={styles['menu-item']}
            onClick={(e) => console.log('todo')}
          >
            <a href="#">
              <i className={'fa fa-weixin'} aria-hidden="true"></i>
            </a>
          </li>
          <li
            className={styles['menu-item']}
            onClick={(e) => handleOpenQRCode()}
          >
            <a href="#">
              <i className={'fa fa-qrcode'} aria-hidden="true"></i>
            </a>
          </li>
          <li
            className={styles['menu-item']}
            onClick={(e) => console.log('todo')}
          >
            <a href="#">
              <i className={'fa fa-tencent-weibo'} aria-hidden="true"></i>
            </a>
          </li>
          <li
            className={styles['menu-item']}
            onClick={(e) => console.log('todo')}
          >
            <a href="#">
              <i className={'fa fa-telegram'} aria-hidden="true"></i>
            </a>
          </li>
          <li
            className={styles['menu-item']}
            onClick={(e) => console.log('todo')}
          >
            <a href="#">
              <i className={'fa fa-renren'} aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CircleMenu;
