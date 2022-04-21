import styles from './QRCode.less';
import qrcode from 'qrcode';
import { useEffect, useState } from 'react';

const getQRCode = async () => {
  const result = await qrcode.toDataURL(location.href, {
    color: {
      light: '#ffffff00',
    },
  });
  return result;
};

const QRCode = () => {
  const [imgUrl, setImgUrl] = useState<string>('');
  useEffect(() => {
    const fetchQRCode = async () => {
      const result = await getQRCode();
      setImgUrl(result);
    };
    fetchQRCode();
  }, []);

  return (
    <div
      className={styles.QRCode}
      onClick={(e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      }}
    >
      <img src={imgUrl} />
    </div>
  );
};

export default QRCode;
